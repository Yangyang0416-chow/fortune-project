'use client';

import { useEffect, useState } from 'react';
import { Navigation } from '@/app/test-analysis/components/Navigation';
import Link from 'next/link';
import { Solar } from 'lunar-typescript';

interface BaziFormData {
  year: string;
  month: string;
  day: string;
  time: string;
  mbti: string;
}

// 天干对照表
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 添加五行类型
type WuXingType = '金' | '木' | '水' | '火' | '土';
type TianGanType = '甲' | '乙' | '丙' | '丁' | '戊' | '己' | '庚' | '辛' | '壬' | '癸';
type DiZhiType = '子' | '丑' | '寅' | '卯' | '辰' | '巳' | '午' | '未' | '申' | '酉' | '戌' | '亥';

// 修改五行属性对照表的类型
const WU_XING: Record<TianGanType | DiZhiType, WuXingType> = {
  '甲': '木', '乙': '木',
  '丙': '火', '丁': '火',
  '戊': '土', '己': '土',
  '庚': '金', '辛': '金',
  '壬': '水', '癸': '水',
  '子': '水', '丑': '土',
  '寅': '木', '卯': '木',
  '辰': '土', '巳': '火',
  '午': '火', '未': '土',
  '申': '金', '酉': '金',
  '戌': '土', '亥': '水'
} as const;

// 添加五行对应的颜色和数字
const WU_XING_COLORS: Record<WuXingType, string[]> = {
  '金': ['白色', '金色', '银色'],
  '木': ['绿色', '青色', '褐色'],
  '水': ['蓝色', '黑色', '深灰色'],
  '火': ['红色', '紫色', '橙色'],
  '土': ['黄色', '棕色', '米色']
};

const WU_XING_NUMBERS: Record<WuXingType, number[]> = {
  '金': [6, 7, 8],
  '木': [3, 4],
  '水': [1, 2],
  '火': [7, 8, 9],
  '土': [5, 0]
};

// 添加生肖数组
const ZODIAC_ANIMALS = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

// 辅助函数
function getZodiacSign(month: string, day: string): string {
  const m = parseInt(month);
  const d = parseInt(day);
  const dates = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 22, 21];
  const signs = ["摩羯座", "水瓶座", "双鱼座", "白羊座", "金牛座", "双子座",
                "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座"];
  return d < dates[m - 1] ? signs[m - 1] : signs[m];
}

function getZodiacDescription(sign: string): string {
  const descriptions: Record<string, string> = {
    "摩羯座": "务实稳重，目标明确，做事有计划性",
    "水瓶座": "创新独特，思维开放，重视自由",
    "双鱼座": "富有同理心，艺术感强，直觉敏锐",
    "白羊座": "充满活力，勇于开拓，领导力强",
    "金牛座": "踏实可靠，享受生活，重视安全感",
    "双子座": "思维灵活，善于沟通，适应力强",
    "巨蟹座": "重情重义，照顾他人，记忆力好",
    "狮子座": "自信阳光，有领袖魅力，追求卓越",
    "处女座": "细心严谨，追求完美，分析力强",
    "天秤座": "优雅和谐，追求公平，善于交际",
    "天蝎座": "意志坚定，洞察力强，重视忠诚",
    "射手座": "乐观开朗，追求自由，视野开阔"
  };
  return descriptions[sign] || "具有独特的个性特征";
}

function getZodiacWorkStyle(sign: string): string {
  const styles: Record<string, string> = {
    "摩羯座": "注重效率，善于规划",
    "水瓶座": "创新思维，独特见解",
    "双鱼座": "富有创意，直觉敏锐",
    "白羊座": "充满干劲，勇于挑战",
    "金牛座": "稳扎稳打，注重细节",
    "双子座": "灵活多变，善于沟通",
    "巨蟹座": "责任心强，关注团队",
    "狮子座": "领导能力强，善于激励",
    "处女座": "严谨细致，追求完美",
    "天秤座": "公平公正，善于协调",
    "天蝎座": "专注投入，善于研究",
    "射手座": "视野开阔，善于创新"
  };
  return styles[sign] || "具有独特的工作方式";
}

function getZodiacSocialStyle(sign: string): string {
  const styles: Record<string, string> = {
    "摩羯座": "谨慎稳重，注重信任",
    "水瓶座": "友善开放，尊重个性",
    "双鱼座": "温和善解人意，富有同情心",
    "白羊座": "热情直率，乐于助人",
    "金牛座": "重视友谊，注重实际",
    "双子座": "善于交际，思维活跃",
    "巨蟹座": "重情重义，关心他人",
    "狮子座": "大方慷慨，乐于分享",
    "处女座": "细心周到，实事求是",
    "天秤座": "圆融和谐，善解人意",
    "天蝎座": "重视真诚，深入交流",
    "射手座": "开朗乐观，广交朋友"
  };
  return styles[sign] || "具有独特的社交风格";
}

function getZodiacLifeStyle(sign: string): string {
  const styles: Record<string, string> = {
    "摩羯座": "追求稳定，注重规划",
    "水瓶座": "追求自由，勇于创新",
    "双鱼座": "感性浪漫，富有同理心",
    "白羊座": "积极向上，充满活力",
    "金牛座": "享受生活，注重品质",
    "双子座": "灵活多变，充满好奇",
    "巨蟹座": "重视家庭，情感丰富",
    "狮子座": "追求卓越，乐于表现",
    "处女座": "追求完美，注重细节",
    "天秤座": "追求平衡，优雅和谐",
    "天蝎座": "深入思考，重视真诚",
    "射手座": "追求自由，乐观开朗"
  };
  return styles[sign] || "具有独特的生活态度";
}

function getZodiacStrength(sign: string): string {
  const strengths: Record<string, string> = {
    "摩羯座": "执行力和耐心",
    "水瓶座": "创新思维",
    "双鱼座": "艺术感知",
    "白羊座": "领导能力",
    "金牛座": "稳定可靠",
    "双子座": "沟通能力",
    "巨蟹座": "同理心",
    "狮子座": "感染力",
    "处女座": "分析能力",
    "天秤座": "协调能力",
    "天蝎座": "洞察力",
    "射手座": "远见卓识"
  };
  return strengths[sign] || "独特优势";
}

function getMBTIDescription(mbti: string | undefined): string {
  const descriptions: Record<string, string> = {
    'INTJ': '理性、独立、追求完美',
    'INTP': '逻辑思维强、创新、追求知识',
    'ENTJ': '果断、有领导力、追求效率',
    'ENTP': '创新、灵活、善于辩论',
    'INFJ': '洞察力强、理想主义、追求意义',
    'INFP': '富有同情心、创意丰富、重视价值',
    'ENFJ': '富有感染力、关心他人、善于激励',
    'ENFP': '热情活力、创意无限、追求可能',
    'ISTJ': '可靠、务实、注重传统',
    'ISFJ': '细心、负责、重视和谐',
    'ESTJ': '果断、实际、注重秩序',
    'ESFJ': '友善、尽责、重视关系',
    'ISTP': '灵活、冷静、擅长解决问题',
    'ISFP': '艺术感强、随和、重视体验',
    'ESTP': '活力充沛、实干、享受当下',
    'ESFP': '热情、随和、喜欢分享'
  };
  return descriptions[mbti || 'INTJ'] || '独特而复杂';
}

function getMBTIWorkStyle(mbti: string): string {
  const styles: Record<string, string> = {
    'INTJ': '战略性思维，追求效率和完美',
    'INTP': '创新思维，专注于解决复杂问题',
    'ENTJ': '目标导向，善于制定和执行计划',
    'ENTP': '灵活多变，善于创新和辩论',
    'INFJ': '富有洞察力，追求意义和价值',
    'INFP': '创意丰富，注重个人价值实现',
    'ENFJ': '善于激励，关注团队发展',
    'ENFP': '充满创意，善于发现可能性',
    'ISTJ': '严谨负责，注重细节和效率',
    'ISFJ': '认真细致，重视稳定和秩序',
    'ESTJ': '果断高效，善于组织和管理',
    'ESFJ': '团队合作，注重人际关系',
    'ISTP': '灵活务实，善于解决技术问题',
    'ISFP': '灵活适应，注重实际体验',
    'ESTP': '行动导向，善于把握机会',
    'ESFP': '活力充沛，善于团队合作'
  };
  return styles[mbti] || '独特的工作方式和专业能力';
}

function getMBTIRelationship(mbti: string): string {
  const relationships: Record<string, string> = {
    'INTJ': '注重深度交流，选择性社交',
    'INTP': '重视思想交流，保持独立空间',
    'ENTJ': '直接坦率，建立有效人际网络',
    'ENTP': '善于交际，享受智慧交流',
    'INFJ': '深入理解他人，追求真诚关系',
    'INFP': '重视内在联系，寻求深度理解',
    'ENFJ': '关心他人，善于建立和谐关系',
    'ENFP': '热情开放，建立广泛的社交网络',
    'ISTJ': '重视承诺，建立稳定关系',
    'ISFJ': '细心体贴，维护长期关系',
    'ESTJ': '注重责任，建立清晰界限',
    'ESFJ': '热心助人，重视社交和谐',
    'ISTP': '尊重个人空间，保持灵活关系',
    'ISFP': '真诚温和，享受轻松关系',
    'ESTP': '活力四射，享受社交互动',
    'ESFP': '热情友好，乐于分享生活'
  };
  return relationships[mbti] || '具有独特的社交方式';
}

function getMBTIDecisionStyle(mbti: string): string {
  const styles: Record<string, string> = {
    'INTJ': '理性分析，注重长期效果',
    'INTP': '逻辑思考，考虑多种可能',
    'ENTJ': '果断决策，注重效率',
    'ENTP': '创新思维，灵活应变',
    'INFJ': '直觉判断，考虑影响',
    'INFP': '价值导向，追求理想',
    'ENFJ': '考虑他人，寻求共识',
    'ENFP': '创意思考，探索可能',
    'ISTJ': '系统分析，遵循规则',
    'ISFJ': '谨慎周到，重视传统',
    'ESTJ': '实事求是，快速决断',
    'ESFJ': '考虑集体，寻求建议',
    'ISTP': '实用主义，灵活应对',
    'ISFP': '价值导向，随机应变',
    'ESTP': '当机立断，把握机会',
    'ESFP': '直觉反应，享受当下'
  };
  return styles[mbti] || '具有独特的决策方式';
}

function getMBTIStrength(mbti: string): string {
  const strengths: Record<string, string> = {
    'INTJ': '战略思维',
    'INTP': '分析能力',
    'ENTJ': '领导才能',
    'ENTP': '创新能力',
    'INFJ': '洞察力',
    'INFP': '创造力',
    'ENFJ': '影响力',
    'ENFP': '激发力',
    'ISTJ': '执行力',
    'ISFJ': '服务力',
    'ESTJ': '管理力',
    'ESFJ': '协调力',
    'ISTP': '应变力',
    'ISFP': '审美力',
    'ESTP': '行动力',
    'ESFP': '感染力'
  };
  return strengths[mbti] || '独特才能';
}

// 修改生肖计算函数
function getChineseZodiac(year: string, month: string, day: string): string {
  // 将阳历转换为农历
  const solar = Solar.fromYmd(
    parseInt(year),
    parseInt(month),
    parseInt(day)
  );
  const lunar = solar.getLunar();
  
  // 使用农历年份计算生肖
  const lunarYear = lunar.getYear();
  const zodiacIndex = (lunarYear - 4) % 12;
  return ZODIAC_ANIMALS[zodiacIndex];
}

export default function BaziResultPage() {
  const [baziData, setBaziData] = useState<BaziFormData | null>(null);
  const [wuxing, setWuxing] = useState({
    metal: 0,
    wood: 0,
    water: 0,
    fire: 0,
    earth: 0
  });

  useEffect(() => {
    const savedData = localStorage.getItem('baziData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setBaziData(data);
      const bazi = generateBazi(data);
      setWuxing(calculateWuXing(bazi));
    }
  }, []);

  // 修改幸运信息生成函数
  const generateLuckyInfo = (data: BaziFormData | null) => {
    if (!data) return {
      colors: ['红色', '黄色'],
      numbers: [3, 7, 9]
    };

    // 获取八字
    const bazi = generateBazi(data);
    // 计算五行比例
    const wuxing = calculateWuXing(bazi);

    // 找出最旺和次旺的五行
    const sortedWuxing = Object.entries(wuxing)
      .sort((a, b) => b[1] - a[1])
      .map(([key]) => {
        switch(key) {
          case 'metal': return '金';
          case 'wood': return '木';
          case 'water': return '水';
          case 'fire': return '火';
          case 'earth': return '土';
          default: return '金';
        }
      })
      .slice(0, 2) as WuXingType[];

    // 获取对应的幸运颜色和数字
    const colors = sortedWuxing.flatMap(element => 
      WU_XING_COLORS[element].slice(0, 2)
    );

    const numbers = sortedWuxing.flatMap(element => 
      WU_XING_NUMBERS[element].slice(0, 2)
    );

    // 根据生年计算生肖，添加生肖相关的幸运数字
    const year = parseInt(data.year);
    const zodiacNumber = (year - 4) % 12 + 1;
    numbers.push(zodiacNumber);

    return {
      colors: Array.from(new Set(colors)).slice(0, 3), // 去重并限制数量
      numbers: Array.from(new Set(numbers)).slice(0, 3).sort((a, b) => a - b) // 去重、排序并限制数量
    };
  };

  // 计算年柱
  const getYearPillar = (year: number): string => {
    const ganIndex = (year - 4) % 10;
    const zhiIndex = (year - 4) % 12;
    return TIAN_GAN[ganIndex] + DI_ZHI[zhiIndex];
  };

  // 计算月柱
  const getMonthPillar = (year: number, month: number, yearGan: string): string => {
    const baseIndex = TIAN_GAN.indexOf(yearGan) % 5 * 2;
    const monthGanIndex = (baseIndex + (month - 1)) % 10;
    const monthZhiIndex = (month + 1) % 12;
    return TIAN_GAN[monthGanIndex] + DI_ZHI[monthZhiIndex];
  };

  // 计算日柱（简化版，实际计算更复杂）
  const getDayPillar = (year: number, month: number, day: number): string => {
    const baseDate = new Date(1900, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const daysDiff = Math.floor((targetDate.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
    const ganIndex = (daysDiff + 9) % 10;
    const zhiIndex = (daysDiff + 11) % 12;
    return TIAN_GAN[ganIndex] + DI_ZHI[zhiIndex];
  };

  // 计算时柱
  const getTimePillar = (time: string): string => {
    const timeMap: Record<string, number> = {
      '子时': 0, '丑时': 1, '寅时': 2, '卯时': 3,
      '辰时': 4, '巳时': 5, '午时': 6, '未时': 7,
      '申时': 8, '酉时': 9, '戌时': 10, '亥时': 11
    };
    const zhiIndex = timeMap[time] || 0;
    const ganIndex = Math.floor(zhiIndex / 2) % 10;
    return TIAN_GAN[ganIndex] + DI_ZHI[zhiIndex];
  };

  // 生成八字
  const generateBazi = (data: BaziFormData | null) => {
    if (!data) return {
      year: '甲子',
      month: '乙丑',
      day: '丙寅',
      time: '丁卯'
    };

    const year = parseInt(data.year);
    const month = parseInt(data.month);
    const day = parseInt(data.day);
    
    const yearPillar = getYearPillar(year);
    const monthPillar = getMonthPillar(year, month, yearPillar[0]);
    const dayPillar = getDayPillar(year, month, day);
    const timePillar = getTimePillar(data.time);

    return {
      year: yearPillar,
      month: monthPillar,
      day: dayPillar,
      time: timePillar
    };
  };

  // 计算五行比例
  const calculateWuXing = (bazi: ReturnType<typeof generateBazi>) => {
    const counts: Record<WuXingType, number> = {
      '金': 0,
      '木': 0,
      '水': 0,
      '火': 0,
      '土': 0
    };
    
    // 统计天干地支的五行
    [bazi.year, bazi.month, bazi.day, bazi.time].forEach(pillar => {
      const gan = pillar[0] as TianGanType;
      const zhi = pillar[1] as DiZhiType;
      counts[WU_XING[gan]]++;
      counts[WU_XING[zhi]]++;
    });

    // 计算百分比
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    return {
      metal: (counts['金'] / total) * 100,
      wood: (counts['木'] / total) * 100,
      water: (counts['水'] / total) * 100,
      fire: (counts['火'] / total) * 100,
      earth: (counts['土'] / total) * 100
    };
  };

  // 生成分析结果
  const generateAnalysis = (data: BaziFormData | null) => {
    if (!data) return '暂无数据';

    const zodiacSign = getZodiacSign(data.month, data.day);

    return `
      <strong>1. 西方星座特质：</strong>
      您的星座是${zodiacSign}，这意味着您天生就具备一些独特的性格特点。
      ${getZodiacDescription(zodiacSign)}
      
      举个例子，作为${zodiacSign}的您，在日常生活中经常会表现出这些特质：
      • 在工作中：${getZodiacWorkStyle(zodiacSign)}
      • 在人际交往中：${getZodiacSocialStyle(zodiacSign)}
      • 在生活态度上：${getZodiacLifeStyle(zodiacSign)}

      <strong>2. 东方命理特质：</strong>
      根据您${data.year}年${data.month}月${data.day}日${data.time}出生的八字分析，您的命理特点非常有趣：

      <strong>性格方面：</strong>
      您天生具有领导才能，做事稳重有条理。这体现在您往往能在关键时刻保持冷静，并作出合理的判断。不过有时候可能会显得过于严肃，建议适当放松心情。

      <strong>事业发展：</strong>
      您特别适合从事需要决策和管理的工作。比如：项目管理、团队领导、企业管理等。您的八字显示，在${data.month}月前后可能会遇到贵人相助，不妨多参加一些社交活动。

      <strong>人际关系：</strong>
      您重情重义，但不会轻易表达感情。这种性格特点让您在维持长期友谊方面很有优势，但有时候也可能让人觉得您不够热情。建议多表达对他人的关心。

      <strong>财运分析：</strong>
      您的八字显示财运稳定，具有理财天赋。建议：
      • 可以尝试一些稳健的投资理财
      • 适合做长期投资规划
      • 注意避免冲动消费

      <strong>3. MBTI性格特质：</strong>
      您的MBTI类型是${data.mbti}，这种性格类型在现代心理学中被认为具有以下特点：

      <strong>性格特征：</strong>
      ${getMBTIDescription(data.mbti)}
      这意味着您在日常生活中往往会：
      • 工作方面：${getMBTIWorkStyle(data.mbti)}
      • 人际关系：${getMBTIRelationship(data.mbti)}
      • 决策方式：${getMBTIDecisionStyle(data.mbti)}

      <strong>4. 综合分析与建议：</strong>
      通过将您的星座、八字和MBTI性格特质综合分析，我们发现一些很有意思的特点：

      <strong>您的优势：</strong>
      • 思维方式：您既有${zodiacSign}的${getZodiacStrength(zodiacSign)}，又具备${data.mbti}型的理性分析能力
      • 行动模式：能够将直觉和逻辑思维很好地结合起来
      • 发展潜力：特别适合需要同时运用创造力和分析能力的工作

      <strong>可能面临的挑战：</strong>
      • 有时可能会过于追求完美，给自己带来不必要的压力
      • 在团队合作中可能需要更多地照顾他人的感受
      • 决策时可能会过分依赖理性分析，忽视直觉的重要性

      <strong>具体建议：</strong>
      1. 工作发展：
         • 充分发挥${zodiacSign}的${getZodiacStrength(zodiacSign)}优势
         • 利用${data.mbti}型的${getMBTIStrength(data.mbti)}特长
         • 在${data.month}月前后注意把握机遇，可能会遇到对事业有帮助的贵人

      2. 人际关系：
         • 多参加群体活动，扩展社交圈
         • 学会在适当时候表达感情
         • 保持开放和包容的心态

      3. 生活建议：
         • 注意作息规律，保持充足的休息
         • 培养一些放松心情的兴趣爱好
         • 在生活中保持积极乐观的态度

      记住，每个人都是独特的个体，这些分析仅供参考。希望这些建议能帮助您更好地认识自己，在生活中获得更多快乐和成就。
    `;
  };

  const bazi = generateBazi(baziData);
  const luckyInfo = generateLuckyInfo(baziData);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        <h1 className="text-3xl font-bold mb-8 text-white">八字分析结果</h1>
        <div className="space-y-8">
          {/* 生肖信息 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">您的中国生肖</h2>
            <div className="text-center">
              <span className="text-2xl font-medium text-gray-900">
                {baziData ? getChineseZodiac(baziData.year, baziData.month, baziData.day) : ''}
              </span>
            </div>
          </div>

          {/* 八字信息 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">您的八字</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="font-medium text-gray-900">年柱</div>
                <div className="mt-2 text-gray-800">{bazi.year}</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-gray-900">月柱</div>
                <div className="mt-2 text-gray-800">{bazi.month}</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-gray-900">日柱</div>
                <div className="mt-2 text-gray-800">{bazi.day}</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-gray-900">时柱</div>
                <div className="mt-2 text-gray-800">{bazi.time}</div>
              </div>
            </div>
          </div>

          {/* 五行分析 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">五行分析</h2>
            <div className="space-y-4">
              <div>
                <div className="font-medium mb-2">五行比例</div>
                <div className="grid grid-cols-5 gap-2">
                  <div className="h-32 relative">
                    <div 
                      className="absolute bottom-0 w-full bg-red-500 rounded-t"
                      style={{ height: `${wuxing.fire}%` }}
                    ></div>
                  </div>
                  <div className="h-32 relative">
                    <div 
                      className="absolute bottom-0 w-full bg-yellow-500 rounded-t"
                      style={{ height: `${wuxing.earth}%` }}
                    ></div>
                  </div>
                  <div className="h-32 relative">
                    <div 
                      className="absolute bottom-0 w-full bg-green-500 rounded-t"
                      style={{ height: `${wuxing.wood}%` }}
                    ></div>
                  </div>
                  <div className="h-32 relative">
                    <div 
                      className="absolute bottom-0 w-full bg-blue-500 rounded-t"
                      style={{ height: `${wuxing.water}%` }}
                    ></div>
                  </div>
                  <div className="h-32 relative">
                    <div 
                      className="absolute bottom-0 w-full bg-gray-500 rounded-t"
                      style={{ height: `${wuxing.metal}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 mt-2 text-sm text-center">
                  <div>火</div>
                  <div>土</div>
                  <div>木</div>
                  <div>水</div>
                  <div>金</div>
                </div>
                <p className="mt-4 text-gray-800">
                  {`您的八字中${Object.entries(wuxing).sort((a, b) => b[1] - a[1])[0][0] === 'metal' ? '金' :
                    Object.entries(wuxing).sort((a, b) => b[1] - a[1])[0][0] === 'wood' ? '木' :
                    Object.entries(wuxing).sort((a, b) => b[1] - a[1])[0][0] === 'water' ? '水' :
                    Object.entries(wuxing).sort((a, b) => b[1] - a[1])[0][0] === 'fire' ? '火' : '土'}最旺，
                    而${Object.entries(wuxing).sort((a, b) => a[1] - b[1])[0][0] === 'metal' ? '金' :
                    Object.entries(wuxing).sort((a, b) => a[1] - b[1])[0][0] === 'wood' ? '木' :
                    Object.entries(wuxing).sort((a, b) => a[1] - b[1])[0][0] === 'water' ? '水' :
                    Object.entries(wuxing).sort((a, b) => a[1] - b[1])[0][0] === 'fire' ? '火' : '土'}偏弱。`}
                </p>
              </div>
            </div>
          </div>

          {/* 幸运信息 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">幸运信息</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">幸运颜色</h3>
                <div className="flex gap-2">
                  {luckyInfo.colors.map(color => (
                    <span 
                      key={color}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">幸运数字</h3>
                <div className="flex gap-2">
                  {luckyInfo.numbers.map(number => (
                    <span 
                      key={number}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      {number}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 综合分析 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">综合分析</h2>
            <div className="space-y-4">
              <p className="text-gray-800 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: generateAnalysis(baziData) }}
              />
            </div>
          </div>

          {/* 添加跳转按钮 */}
          <div className="flex justify-center mt-12">
            <Link
              href="/test-analysis/bazi/fortune2025"
              className="px-6 py-3 bg-foreground text-background rounded-md hover:bg-opacity-90 transition flex items-center space-x-2"
            >
              <span>查看2025年运势分析</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 