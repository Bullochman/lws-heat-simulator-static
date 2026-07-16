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

      // ---- season-agnostic fallback (generic — still used if season id is unrecognized)
      noHeatTitle: "Heat mechanics don't apply this season",
      noHeatBody: 'This tool visualises Season 2 (Polar Storm) thermal bands. The current warzone/season has no temperature system — switch warzone or override the season via the selector above to plan for a frozen season.',
      noHeatFreezeList: 'Freeze-risk list is Season-2-only. No thermal drop on this season.',

      // ---- per-season app titles / taglines (title & description override at render time)
      appTitle_s2: 'Heat Simulator',
      appTagline_s2: 'Season 2 (Polar Storm) temperature overlay + freeze-risk planner. Paints the map with the seven ambient bands (-15 °C to -80 °C), overlays furnaces + cities, flags freeze-risk bases.',
      appTitle_s4: 'Night Simulator',
      appTagline_s4: 'Season 4 (Evernight Isle) Blood Night planner. Shows the 3 daily Blood Night windows (02:30 / 10:30 / 18:30 server), power drain per window, Lighthouse + Divine Tree VR mitigation, and per-week Blood Night stage.',

      // ---- per-season placeholder copy (S1 / S3 / S5 / S6)
      noHeatTitle_s1: 'Season 1 has no thermal system',
      noHeatBody_s1: 'Season 1 (Crimson Plague) uses virus stacks + Doomsday cycles instead of temperature. There is no cold/heat mechanic to visualize. For S1 planning, use the Season Timeline tool for Doomsday cycles + Virus Resistance gates, or override to Season 2 to plan a frozen season.',
      noHeatTitle_s3: 'Season 3 has no thermal system',
      noHeatBody_s3: 'Season 3 (Golden Kingdom) uses Curse Resistance + Sandworm Crisis, not temperature. The closest spatial hazard is Sandworm teleport-out for bases outside your Alliance Center 5x5 range — use the City Capture Planner (S3 mode) for that. Override to S2 here to plan a frozen season.',
      noHeatTitle_s5: 'Season 5 has no thermal system',
      noHeatBody_s5: 'Season 5 (Wild West) has no thermal or fog hazard. The signature spatial mechanic is Alliance Safe Time (7-15h R5-set immunity that turns off 1 of 3 daily war windows Wed/Sat). For S5 planning use the (upcoming) Bank Ledger tool, or override to S2 here for freeze planning.',
      noHeatTitle_s6: 'Season 6 fog visibility: KB gap',
      noHeatBody_s6: 'Season 6 (Shadow Rainforest) has environmental fog that reduces visibility, shared among nearby allies (clustered alliances see farther than spread-out ones). Concrete fog numbers are a KB gap — a Fog Visibility variant is planned once source data lands. For now, plan on the (upcoming) Altar Conquest Planner, or override to S2 here for freeze planning.',
      kbGapFogBadge: 'KB gap: fog radius / duration / visibility formula not yet sourced. Speculative mentions only.',

      // ---- Season 4: Blood Night controls / readout
      mapPanelTitle_s4: 'Blood Night Clock',
      nightPhaseLabel: 'Blood Night stage',
      nightPhaseOff: 'Off (day)',
      nightPhaseStage1: 'Stage 1 · W1 · Night Parade of 100 Oni',
      nightPhaseStage2: 'Stage 2 · W2 · Wandering Oniwagon Invasion',
      nightPhaseStage3: 'Stage 3 · W3-7 · Doomsday Crisis / Oni Legions',
      nightPhaseStage4: 'Stage 4 · W8 · Towards the Light',
      lighthouseLabel: 'Lighthouse level (L1-L4)',
      divineTreeLabel: 'Divine Tree active',
      nextWindow: 'Next Blood Night window',
      powerDrain: 'Power drain / window',
      vrMitigation: 'Your VR mitigation',
      stageDebuffWarn: 'Stage 3 warning: triggering Oni Summon applies +500 Commander Durability Damage debuff.',
      footerCred_s4: 'Data source: LWS Knowledge Base · Season 4 (Evernight Isle) · Blood Night Descend',

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

      // ---- season-agnostic fallback (generic — still used if season id is unrecognized)
      noHeatTitle: '이번 시즌에는 온도 시스템이 적용되지 않습니다',
      noHeatBody: '이 도구는 시즌 2(폴라 스톰)의 온도대를 시각화합니다. 현재 전쟁구역/시즌에는 온도 시스템이 없습니다 — 위 선택기에서 전쟁구역을 바꾸거나 시즌을 재정의해 냉동 시즌을 계획해 보세요.',
      noHeatFreezeList: '냉동 위험 명단은 시즌 2 전용입니다. 이번 시즌은 온도 하락이 없습니다.',

      // ---- per-season app titles / taglines
      appTitle_s2: '히트 시뮬레이터',
      appTagline_s2: '시즌 2 (폴라 스톰) 온도 오버레이 + 냉동 위험 플래너. 지도에 7개 온도대(-15 °C ~ -80 °C)를 표시하고 화로와 도시를 겹쳐, 냉동 위험이 있는 기지를 표시합니다.',
      appTitle_s4: '나이트 시뮬레이터',
      appTagline_s4: '시즌 4 (에버나잇 아일) 블러드 나이트 플래너. 하루 3번의 블러드 나이트 시간대(서버 시간 02:30 / 10:30 / 18:30), 시간대별 전력 소모, 등대 + 디바인 트리 바이러스 저항 완화, 주차별 블러드 나이트 단계를 표시합니다.',

      // ---- per-season placeholder copy
      noHeatTitle_s1: '시즌 1에는 온도 시스템이 없습니다',
      noHeatBody_s1: '시즌 1 (크림슨 플레이그)는 온도 대신 바이러스 스택과 둠스데이 사이클을 사용합니다. 시각화할 냉기/열기 메커니즘이 없습니다. S1 계획은 시즌 타임라인 도구를 사용해 둠스데이 사이클과 바이러스 저항력 관문을 확인하거나, 시즌 2로 재정의해 냉동 시즌을 계획하세요.',
      noHeatTitle_s3: '시즌 3에는 온도 시스템이 없습니다',
      noHeatBody_s3: '시즌 3 (골든 킹덤)은 온도 대신 저주 저항력과 샌드웜 위기를 사용합니다. 가장 가까운 공간 위험은 연맹 센터 5x5 범위를 벗어난 기지의 샌드웜 텔레포트입니다 — 이는 도시 점령 플래너 (S3 모드)에서 계획하세요. 여기서 냉동 시즌을 계획하려면 S2로 재정의하세요.',
      noHeatTitle_s5: '시즌 5에는 온도 시스템이 없습니다',
      noHeatBody_s5: '시즌 5 (와일드 웨스트)에는 온도나 안개 위험이 없습니다. 대표적인 공간 메커니즘은 얼라이언스 세이프 타임 (R5가 설정하는 7-15시간 면역, 수/토 하루 3번의 전쟁 시간대 중 1개를 끄는 기능)입니다. S5 계획은 뱅크 원장 도구 (예정)을 사용하거나, 여기서 냉동 시즌을 계획하려면 S2로 재정의하세요.',
      noHeatTitle_s6: '시즌 6 안개 시야: KB 누락',
      noHeatBody_s6: '시즌 6 (섀도우 레인포레스트)에는 시야를 줄이는 환경 안개가 있으며, 인근 아군끼리 시야를 공유합니다 (뭉친 연맹이 흩어진 연맹보다 더 멀리 봅니다). 안개의 구체적인 수치는 KB 누락이며, 출처 데이터가 확보되면 안개 시야 변형이 계획되어 있습니다. 지금은 얼탈 정복 플래너 (예정)에서 계획하거나, 여기서 냉동 시즌을 계획하려면 S2로 재정의하세요.',
      kbGapFogBadge: 'KB 누락: 안개 반경 / 지속시간 / 시야 공식은 아직 확보되지 않았습니다. 추측성 언급만 존재합니다.',

      // ---- Season 4: Blood Night controls / readout
      mapPanelTitle_s4: '블러드 나이트 시계',
      nightPhaseLabel: '블러드 나이트 단계',
      nightPhaseOff: '꺼짐 (낮)',
      nightPhaseStage1: '1단계 · 1주차 · 백귀야행',
      nightPhaseStage2: '2단계 · 2주차 · 방황하는 오니와곤 침공',
      nightPhaseStage3: '3단계 · 3-7주차 · 둠스데이 위기 / 오니 군단',
      nightPhaseStage4: '4단계 · 8주차 · 빛을 향하여',
      lighthouseLabel: '등대 레벨 (L1-L4)',
      divineTreeLabel: '디바인 트리 활성',
      nextWindow: '다음 블러드 나이트 시간대',
      powerDrain: '시간대당 전력 소모',
      vrMitigation: '바이러스 저항 완화',
      stageDebuffWarn: '3단계 경고: 오니 소환 발동 시 지휘관 내구도 데미지 +500 디버프가 적용됩니다.',
      footerCred_s4: '데이터 출처: LWS 지식 베이스 · 시즌 4 (에버나잇 아일) · 블러드 나이트 강림',

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
