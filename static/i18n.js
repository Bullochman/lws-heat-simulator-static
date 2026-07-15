/* LWS Heat Simulator — i18n
 *
 * KR-first: browser-language auto-detected; toggle pill in top-right.
 * Every visible string comes through I18N[lang][key]. No hardcoded strings in DOM.
 *
 * KR terminology sourced from:
 *   - [[15-glossary]]  (LWS_Knowledge_Base/kb/15-glossary.md)
 *   - [[06-season-2-frozen]] KR-EN table (temperature, furnace, blizzard, freeze)
 *
 * If you add a string key here, add it in BOTH en and ko.
 */

(function (global) {
  'use strict';

  const I18N = {
    en: {
      // ---- header / brand
      brandSub: 'LWS Suite · Heat Simulator',
      langToggle: '한국어',

      // ---- app titles
      appTitle: 'Heat Simulator',
      appTagline: 'Season 2 (Polar Storm) temperature overlay + freeze-risk planner. Paints the map with the seven ambient bands (-15 °C to -80 °C), overlays furnaces + cities, flags freeze-risk bases.',

      // ---- panels
      mapPanelTitle: 'Warzone Heat Map',
      controlsPanelTitle: 'Controls',
      readoutPanelTitle: 'Readout',
      freezeListTitle: 'Freeze-Risk Roster',

      // ---- controls
      capitolLabel: 'Capitol (x, y)',
      furnaceLabel: 'Alliance Furnace',
      furnacePlaceholder: 'x, y, level',
      furnaceHint: 'R4/R5 deploys on L1 territory Day 1 (KB [[06-season-2-frozen]])',
      cityLabel: 'Cities',
      cityHint: 'Level 1 = +5 °C · Level 6 = +60 °C',
      blizzardLabel: 'Blizzard',
      blizzardNone: 'None',
      blizzardW12: 'Week 1-2 (-30 °C)',
      blizzardW3:  'Week 3 (-50 °C)',
      blizzardW4:  'Week 4+ (-70 °C, Rare Soil War)',
      lookupLabel: 'Lookup coord',
      lookupPlaceholder: 'e.g. 342, 118',
      lookupBtn: 'Compute',

      // ---- roster
      rosterUploadBtn: 'Upload roster CSV',
      rosterFormatHint: 'Columns: name, rank, hq_level, total_power, notes, x, y — matches Hive Grid Manager',
      exportPngBtn: 'Export PNG',
      exportCsvBtn: 'Export CSV',

      // ---- readout
      ambient: 'Ambient',
      blizzardDrop: 'Blizzard drop',
      bonusTotal: 'Bonus stack',
      current: 'Current temp',
      freezeThreshold: 'Freeze threshold',
      freezeRisk: 'Freeze risk',
      status: 'Status',
      statusFrozen: 'FROZEN',
      statusSafe: 'safe',

      // ---- KB-gap warning
      kbGapBadge: 'KB gap',
      furnaceRadiusWarn: 'Alliance Furnace tile radius per level is a KB gap — the drawn ring is a placeholder (see docs/kb-refs.md).',

      // ---- season-agnostic fallback
      noHeatTitle: "Heat mechanics don't apply this season",
      noHeatBody: 'This tool visualises Season 2 (Polar Storm) thermal bands. The current warzone/season has no temperature system — switch warzone or override the season via the selector above to plan for a frozen season.',
      noHeatFreezeList: 'Freeze-risk list is Season-2-only. No thermal drop on this season.',

      // ---- footer
      footerCred: 'Data source: LWS Knowledge Base · Season 2 (Polar Storm)',
      footerHome: 'r5tools.io',

      // ---- placeholders / errors
      msgUploaded: 'Roster uploaded — {n} members loaded.',
      msgUploadFailed: 'Upload failed. Check CSV format.',
      msgNoRoster: 'No roster loaded. Upload a CSV or paste a coord.',
      msgNetworkErr: "Couldn't reach the server.",
    },

    ko: {
      // ---- header / brand
      brandSub: 'LWS 스위트 · 히트 시뮬레이터',
      langToggle: 'EN',

      // ---- app titles
      appTitle: '히트 시뮬레이터',
      appTagline: '시즌 2 (폴라 스톰) 온도 오버레이 + 냉동 위험 플래너. 지도에 7개 온도대(-15 °C ~ -80 °C)를 표시하고 화로와 도시를 겹쳐, 냉동 위험이 있는 기지를 표시합니다.',

      // ---- panels
      mapPanelTitle: '워존 열지도',
      controlsPanelTitle: '컨트롤',
      readoutPanelTitle: '결과',
      freezeListTitle: '냉동 위험 명단',

      // ---- controls
      capitolLabel: '수도 (x, y)',
      furnaceLabel: '연맹 화로',
      furnacePlaceholder: 'x, y, 레벨',
      furnaceHint: 'R4/R5가 1일차에 Lv1 영토에 배치 (KB [[06-season-2-frozen]])',
      cityLabel: '도시',
      cityHint: '레벨 1 = +5 °C · 레벨 6 = +60 °C',
      blizzardLabel: '눈보라',
      blizzardNone: '없음',
      blizzardW12: '1-2주차 (-30 °C)',
      blizzardW3:  '3주차 (-50 °C)',
      blizzardW4:  '4주차+ (-70 °C, 희토 전쟁)',
      lookupLabel: '좌표 조회',
      lookupPlaceholder: '예: 342, 118',
      lookupBtn: '계산',

      // ---- roster
      rosterUploadBtn: '연맹 명단 CSV 업로드',
      rosterFormatHint: '열: name, rank, hq_level, total_power, notes, x, y — 하이브 그리드 매니저와 동일',
      exportPngBtn: 'PNG 내보내기',
      exportCsvBtn: 'CSV 내보내기',

      // ---- readout
      ambient: '지면 온도',
      blizzardDrop: '눈보라 하락',
      bonusTotal: '보너스 합계',
      current: '현재 온도',
      freezeThreshold: '냉동 임계값',
      freezeRisk: '냉동 위험',
      status: '상태',
      statusFrozen: '냉동',
      statusSafe: '안전',

      // ---- KB-gap warning
      kbGapBadge: 'KB 누락',
      furnaceRadiusWarn: '연맹 화로 레벨별 타일 반경은 KB에 없는 값입니다 — 표시된 원은 임시 값입니다 (docs/kb-refs.md 참조).',

      // ---- season-agnostic fallback
      noHeatTitle: '이번 시즌에는 온도 시스템이 적용되지 않습니다',
      noHeatBody: '이 도구는 시즌 2(폴라 스톰)의 온도대를 시각화합니다. 현재 전쟁구역/시즌에는 온도 시스템이 없습니다 — 위 선택기에서 전쟁구역을 바꾸거나 시즌을 재정의해 냉동 시즌을 계획해 보세요.',
      noHeatFreezeList: '냉동 위험 명단은 시즌 2 전용입니다. 이번 시즌은 온도 하락이 없습니다.',

      // ---- footer
      footerCred: '데이터 출처: LWS 지식 베이스 · 시즌 2 (폴라 스톰)',
      footerHome: 'r5tools.io',

      // ---- placeholders / errors
      msgUploaded: '명단 업로드 완료 — {n}명 로드됨.',
      msgUploadFailed: '업로드 실패. CSV 형식을 확인하세요.',
      msgNoRoster: '로드된 명단이 없습니다. CSV를 업로드하거나 좌표를 붙여넣으세요.',
      msgNetworkErr: '서버에 연결할 수 없습니다.',
    },
  };

  // ---- runtime ----

  let currentLang = (navigator.language || 'en').toLowerCase().startsWith('ko') ? 'ko' : 'en';

  function t(key, vars) {
    const dict = I18N[currentLang] || I18N.en;
    let s = dict[key];
    if (s === undefined) s = I18N.en[key] || key;
    if (vars) {
      for (const k in vars) s = s.replace('{' + k + '}', vars[k]);
    }
    return s;
  }

  function apply(root) {
    root = root || document;
    root.documentElement && (root.documentElement.lang = currentLang);
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val !== undefined) el.textContent = val;
    });
    root.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val !== undefined) el.placeholder = val;
    });
    root.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-title');
      const val = t(key);
      if (val !== undefined) el.title = val;
    });
  }

  function setLang(lang) {
    currentLang = (lang === 'ko') ? 'ko' : 'en';
    apply(document);
    try { localStorage.setItem('lws_heat_lang', currentLang); } catch (_) {}
    // Fire an event so app.js can re-render dynamic labels
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: currentLang } }));
  }

  function toggle() {
    setLang(currentLang === 'en' ? 'ko' : 'en');
  }

  function init() {
    // Prefer saved preference over browser default
    try {
      const saved = localStorage.getItem('lws_heat_lang');
      if (saved === 'ko' || saved === 'en') currentLang = saved;
    } catch (_) {}
    apply(document);
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggle);
  }

  global.I18N = {
    t: t,
    apply: apply,
    setLang: setLang,
    toggle: toggle,
    init: init,
    get lang() { return currentLang; },
    // expose dict for debugging in dev console
    _dict: I18N,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
