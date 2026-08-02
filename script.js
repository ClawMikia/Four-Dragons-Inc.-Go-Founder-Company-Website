(() => {
  const html = document.documentElement;
  const nav = document.getElementById('siteNav');
  const scrim = document.getElementById('scrim');
  const drawerToggle = document.getElementById('drawerToggle');
  const navClose = document.getElementById('navClose');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const langSwitch = document.getElementById('langSwitch');

  const STORE_KEY_THEME = 'fourDragons.theme';
  const STORE_KEY_NAV = 'fourDragons.navPosition';
  const STORE_KEY_LANG = 'fourDragons.language';
  const translations = {
    en: {
      navHome: 'Home',
      navFounder: 'Founder Blueprint',
      navValues: 'The Four Pillars',
      navConstitution: 'Constitution',
      navCulture: 'Culture Book',
      navLeadership: 'Leadership',
      navWork: 'Work Culture',
      navCreative: 'Creative Bible',
      navRelations: 'Human Relations',
      navAikido: 'Atatakasa Aikido',
      navOrg: 'Organization',
      navBusiness: 'Business Plan',
      navFuture: 'Future Research',
      navPhilosophy: 'Creative Philosophy',
      themeLabel: 'Theme',
      themeDark: 'Dark',
      themeLight: 'Light',
      navLabel: 'Navbar position',
      navTop: 'Top',
      navLeft: 'Left',
      navRight: 'Right',
      langLabel: 'Language',
      heroEyebrow: 'Tokyo, Japan · Main Headquarters & Decentralized Worldwide',
      heroTitle: 'Four Dragons Inc. Go <span class="jp">(演劇)</span>',
      heroSub: 'A dragon-gaming entertainment empire building games, anime, film and music on a foundation of dignity, creative freedom, and <strong>Atatakasa (温かさ)</strong> — warmth.',
      heroFounder: 'Christopher Lee Cajes — Founder, CEO & Chairman',
      heroPrimary: 'Read the Founder Blueprint',
      heroSecondary: 'See the Four Pillars',
      founderVol: 'Volume I — Founder Blueprint (The Heart)',
      founderTitle: 'Why does Four Dragons Inc. exist?',
      founderQuote: '“Four Dragons Inc. exists to give people the opportunity to create the entertainment they truly want to make — with passion, purpose, kindness, and artistic freedom. We build not only entertainment, but also people, families, and future creators.”',
      visionTitle: 'Vision',
      visionText: 'Become one of the world\'s greatest entertainment companies while becoming one of the happiest places to work.',
      missionTitle: 'Mission',
      missionText: 'Create unforgettable entertainment. Empower creators. Support families. Inspire children. Improve people\'s lives.',
      mottoTitle: 'Motto',
      mottoText: '“We don\'t build people. We build creators.”',
      mindsetQuote: '“They don\'t work for me. I work for them.”',
      mindsetText: 'A leader exists to remove obstacles, support growth, and enable others to do their best work.',
      dragonSymbolTitle: 'Dragon Head Symbol:',
      dragonSymbolText: 'The Founder loves dragons especially DRAGON Type Pokemon and Moves.',
      valuesVol: 'The Company Logo — The "4" Text Symbol',
      valuesTitle: 'The Four Core Values',
      valuesLead: 'The dragon head at the center of the emblem carries the Founder\'s love of dragons — especially Dragon-type Pokémon and their moves; the number four, split in dragon-blue and dragon-red, stands for the four pillars every creator at Four Dragons Inc. is asked to carry.',
      pillarMissionTitle: 'Champion the Mission',
      pillarMissionText: 'Employees are united with the broader community to drive the company\'s ultimate purpose.',
      pillarHostTitle: 'Be a Host',
      pillarHostText: 'The company emphasizes hospitality, encouraging teams to be caring, open, and encouraging in all professional relationships.',
      pillarAdventureTitle: 'Embrace the Adventure',
      pillarAdventureText: 'Employees are encouraged to approach challenges with hopeful resilience, open curiosity, and an eagerness to grow.',
      pillarEntrepreneurTitle: 'Be a Cereal Entrepreneur',
      pillarEntrepreneurText: 'Determination and creative problem-solving in turning bold, sometimes unconventional ambitions into reality.',
      constitutionVol: 'Volume II — Corporate Constitution',
      constitutionTitle: 'This should almost never change',
      article1Title: 'Every person deserves dignity.',
      article2Title: 'Good human beings come before great talent.',
      article2Text: 'Character outweighs skill. Skills can be learned. Character must be lived.',
      article3Title: 'Zero corruption.',
      article3Text: 'No bribery. No abuse of authority. No favoritism. No exploitation.',
      article4Title: 'The company exists to improve people\'s lives.',
      article4Text: 'Profit exists to sustain the mission — not replace it.',
      article5Title: 'Everyone is a creator.',
      article5Text: 'Teams may create. Individuals may create. Employees may pitch completely original projects. Passion projects are encouraged.',
      article6Title: 'No layoffs caused solely by financial optimization.',
      article6Text: 'Whenever possible: relocate people, retrain people, create new opportunities. No matter what, the Founder will do everything in his power to protect his children — their jobs, their dreams, and their futures come first, always.',
      article7Title: 'Anyone may resign peacefully to pursue their own dreams.',
      article7Text: 'The company celebrates entrepreneurship. Leaving to build your own business is a success — not betrayal. Former members remain part of the Four Dragons family.',
      article8Title: 'Treat everyone equally.',
      article8Text: 'Titles do not determine worth. Executives and interns deserve equal human respect.',
      article9Title: 'No forced participation.',
      article9Quote: '“Walang sapilitan.”',
      article9Text: 'Respect personal boundaries. Real teamwork comes from willingness — not coercion.',
      article10Title: 'Continuous learning.',
      article10Text: 'Everyone remains a student. Everyone remains a teacher.',
      cultureVol: 'Volume III — Culture Book',
      cultureTitle: 'Our Values',
      valueKindness: 'Kindness',
      valueRespect: 'Respect',
      valueHonesty: 'Honesty',
      valuePassion: 'Passion',
      valueFamily: 'Family',
      valueHumility: 'Humility',
      valueCreativity: 'Creativity',
      valueCourage: 'Courage',
      valueResponsibility: 'Responsibility',
      valueCompassion: 'Compassion',
      valueCuriosity: 'Curiosity',
      valueGratitude: 'Gratitude',
      valueOptimism: 'Optimism',
      valueService: 'Service',
      rejectTitle: 'We Reject',
      rejectCorruption: 'Corruption',
      rejectBullying: 'Bullying',
      rejectHarassment: 'Harassment',
      rejectDiscrimination: 'Discrimination',
      rejectManipulation: 'Manipulation',
      rejectCruelty: 'Cruelty',
      rejectAbuse: 'Abuse',
      rejectPolitics: 'Workplace politics',
      rejectToxicCompetition: 'Toxic competition',
      rejectFearMgmt: 'Fear-based management',
      rejectToxicWork: 'Toxic work culture',
      rejectMicromanage: 'Micromanagement / Micromanaging / Micromanaginng',
      rejectReframe1: 'The word <em>"Micromanage" / "Micromanagement" / "Micromanaginng"</em> doesn\'t exist — not a vocabulary, not in the dictionary of Four Dragons Inc.',
      rejectReframe2: 'Instead of saying <em>"No toxicity,"</em> define what you expect: <br /><br /> <strong>"We speak respectfully. We don\'t criticize people. We lift each other up."</strong>',
      rejectQuote: '“Four Dragons Inc. has zero tolerance for toxic work culture — whether it comes from those in charge, peers, or outside folks. If the environment stops feeling safe, the Founder will act. He will protect his family.”',
      leadershipVol: 'Volume IV — Leadership Handbook',
      leadershipTitle: 'CEO Philosophy',
      leadershipQuote1: '“My people are not here to serve me. I exist to serve them.”',
      leadershipQuote2: '“I don\'t work for politics. I\'m an entertainer, not a politician — my only agenda is to create worlds people love and build a family of creators who do the same.”',
      compareInstead: 'Instead of asking',
      comparePrompt: '“Why is performance low?”',
      compareLeader: 'Leaders first ask',
      compareQuestion: '“How are you doing?”',
      checklist1: 'Are you okay?',
      checklist2: 'Is something happening at home?',
      checklist3: 'How can we help?',
      checklist4: 'What support do you need?',
      leadershipLead: 'Only afterward do they discuss work performance. Success is measured by both people thriving <em>and</em> great products.',
      workVol: 'Volume V — Work Culture',
      workTitle: 'Remote-first. Family-first. Health-first.',
      workTag1: 'Flexible schedules where possible',
      workTag2: 'No unnecessary overtime',
      workTag3: 'No office politics',
      workTag4: 'Performance over appearances',
      workTag5: 'No mandatory overtime',
      workTag6: 'No face time',
      workTag7: 'No pretending to be busy',
      workTag8: 'People stay as long as they are happy',
      workTag9: 'The word "micromanage" does not exist here',
      creativeVol: 'Volume VI — Creative Bible',
      creativeTitle: 'Every creator owns their passion.',
      creativeTeamTitle: 'Teams',
      creativeTeamText: 'Teams can create games. Teams can create anime.',
      creativeIndividualTitle: 'Individuals',
      creativeIndividualText: 'Individuals can create games. Individuals can create anime.',
      creativeIdeaTitle: 'Every Idea',
      creativeIdeaText: 'Original ideas are encouraged. Innovation belongs to everyone. No idea is rejected because of rank.',
      relationsVol: 'Volume VII — Human Relations',
      relationsTitle: 'Respect comes from actions — not titles.',
      relationsTag1: 'No Sir. No Ma\'am.',
      relationsTag2: 'No excessive corporate formalities',
      relationsTag3: 'Use names',
      relationsTag4: 'No forced friendships',
      relationsTag5: 'No fake “pakikisama”',
      relationsLead: 'Relationships between consenting adults are respected, provided they do not create conflicts of interest or harm others.',
      relationsQuote: '“Pakikisama.” Not “Pakiki-sama!” — Walang sapilitan.',
      aikidoVol: 'Volume VIII — Four Dragons Inc. Go · Atatakasa Aikido',
      aikidoTitle: '温かさ — Atatakasa',
      aikidoLead: 'Warmth. Kindness. Compassion. An optional weekend program — not a job requirement — open to everyone, families, children and guests alike.',
      aikidoPurposeTitle: 'Purpose',
      aikidoPurposeText: 'Strengthen health. Build trust. Reduce stress. Promote humility. Encourage lifelong learning.',
      aikidoWeekendTitle: 'Weekend Activities',
      aikidoWeekendText: 'Optional Aikido practice, meditation, stretching, tea gathering — with family participation welcome.',
      aikidoPhilosophyTitle: 'Philosophy',
      aikidoPhilosophyText: '温かさ — Atatakasa. Warmth. Kindness. Compassion.',
      aikidoLead2: 'Ranks never determine a person\'s worth. Higher-ranked visitors are warmly welcomed to teach whenever they wish.',
      aikidoSubhead: 'Four Dragons Inc. Go · Atatakasa Aikido (温かさ) — Tokyo, Japan',
      aikidoCard1Title: 'Founder & Leadership',
      aikidoCard1Text: 'Christopher Lee Cajes serves as CEO and Chairman.',
      aikidoCard2Title: 'Geographic & Historical Landmark',
      aikidoCard2Text: 'Headquartered in Tokyo, Japan, this represents a monumental milestone — the first-ever pioneer initiative where a Filipino leader serves as Chairman and CEO of a domestic Japanese enterprise operating directly in the birthplace of Aikido. This presence echoes the path of Steven Seagal, the first Westerner to successfully manage an official martial arts organization and dojo infrastructure on Japanese soil.',
      aikidoCard3Title: 'The “Atatakasa” (温かさ) Philosophy',
      aikidoCard3Text: 'The organization takes its name from Atatakasa, meaning “Warmth” or “Kindness.” It translates O\'Sensei Morihei Ueshiba\'s spiritual vision of universal harmony into a workspace and training hall defined by deep empathy, psychological safety, and unconditional care.',
      aikidoCard4Title: 'Corporate & Media Focus',
      aikidoCard4Text: 'A highly progressive, multi-industry corporate empire spanning video game development, immersive entertainment show production, and alternative Aikido leadership.',
      aikidoCard5Title: 'Radical Inclusivity & Open Sensei Policy',
      aikidoCard5Text: 'Structured as a tight-knit family empire where the Chairman works alongside his children, the company enforces absolute, uncompromised structural equality. Traditional martial-arts hierarchies, ranks, and dan boundaries are completely removed — visiting aikidokas, members, and children train or work as equals regardless of rank or background. The headquarters operates an open-door policy: any martial artist ranked higher than the Chairman is enthusiastically welcomed to take the floor as guest sensei for the day or weekend. The organization maintains a standing, open aspiration to host Doshu Moriteru Ueshiba, should he ever visit, as leading master sensei.',
      aikidoCard6Title: 'The “Weekend Ukemi” Healing Protocol',
      aikidoCard6Text: 'A direct practical application of Atatakasa for healing life trauma within the family and company. When his children or students face immense emotional hardship, the Chairman intentionally steps down from the dominant nage (thrower) role on weekends and chooses to act strictly as ukemi — the receiver who takes the fall — for his students and higher-ranked practitioners. By reversing the traditional sensei power dynamic to absorb the physical momentum and impact, he creates a space of profound humility, mutual trust, and active emotional recovery.',
      orgVol: 'Volume IX — Organization',
      orgTitle: 'Structure in service of creators',
      orgLevel1: 'Founder',
      orgLevel2: 'Chairman',
      orgLevel3: 'CEO',
      orgLevel4: 'Japanese Vice Presidents',
      orgLevel5: 'Creative Directors',
      orgLevel6: 'Independent Creator Teams',
      orgLevel7: 'Global HQ — Tokyo',
      orgLevel8: 'Regional HQs',
      orgLevel9: 'Country HQs',
      orgLevel10: 'Remote Creator Teams',
      businessVol: 'Volume X — Business Plan',
      businessTitle: 'Products',
      businessItem1: 'Video Games',
      businessItem2: 'Anime',
      businessItem3: 'Movies',
      businessItem4: 'Cartoons',
      businessItem5: 'Educational Children\'s Programs',
      businessItem6: 'Music',
      businessItem7: 'Books',
      businessItem8: 'Streaming',
      businessItem9: 'Merchandise',
      businessItem10: 'Theme Parks',
      standardsTitle: 'Content Standards',
      standardsLead: 'Creators and developers are expected to produce content that uplifts, inspires, and brings people together. The following themes are not permitted across any product:',
      standard1: 'Brutal or excessively violent content',
      standard2: 'Horror, scary, or disturbing imagery',
      standard3: 'Inappropriate or mature themes',
      standard4: 'Anything that creates a negative emotional impact',
      standard5: 'Cynical, hopeless, or fear-based messaging',
      standard6: 'Content that normalizes suffering or despair',
      standardsLead2: 'Instead, all content should strive to be friendly, hopeful, and positive. We create worlds and stories that inspire courage, kindness, joy, and connection. Every project under Four Dragons Inc. should leave audiences feeling better than before.',
      standardsList1: '+ Friendly & Welcoming',
      standardsList2: '+ Inspirational & Hopeful',
      standardsList3: '+ Positive & Joyful',
      standardsList4: '+ Kind & Compassionate',
      standardsList5: '+ Courageous & Adventurous',
      futureVol: 'Volume XI — Future Research',
      futureLead: 'This book continuously evolves — artificial intelligence, global law, finance, psychology, education, entertainment, business, game design, animation, leadership, real management philosophy, health, family wellness, and among others.',
      futureCardTitle: 'One Recommendation',
      futureCardText1: 'Most of this philosophy centers on compassion, freedom, and trust, which can make for a distinctive company culture. At the same time, every organization benefits from some shared expectations and coordination. Rather than eliminating all project-management practices, they can be adapted to fit these values — for example, replacing blame-oriented reviews with supportive check-ins, using lightweight planning instead of rigid processes, and encouraging feedback that helps people improve rather than assigning fault.',
      futureCardText2: 'That approach stays true to the core idea:',
      futureQuote: '"People come first. Great entertainment follows."',
      futureCardText3: 'It also creates a culture that is compassionate without losing the structure needed to build ambitious games, anime, films, and other creative projects over many years.',
      philosophyVol: 'Volume XII — Creative Philosophy',
      philosophyTitle: 'No deadlines. Just great work.',
      philosophyLead1: 'At Four Dragons Inc., we don\'t rush our creators. The best work comes when you\'re free to explore, iterate, and let ideas breathe — not when a calendar is breathing down your neck.',
      philosophyLine1: '"I\'m not chasing the clock on this."',
      philosophyLine2: '"I\'m focused on the work, not the pressure of the date."',
      philosophyLine3: '"I\'m staying ahead of the game so the deadline isn\'t an issue."',
      philosophyLead2: 'These aren\'t just slogans — they\'re how we actually operate. When people aren\'t stressed about arbitrary timelines, they take risks, experiment, and produce work they\'re truly proud of. Rushing creates mediocrity; patience creates masterpieces.',
      philosophySubhead: 'A living proof — Leonardo da Vinci',
      philosophyPara1: 'The best example of this philosophy in action is Leonardo da Vinci himself. He took roughly <strong>16 years</strong> to complete the <em>Mona Lisa</em> — from around 1503 until he died in 1519. He never delivered it to the person who commissioned it. He simply kept refining it, because he believed it wasn\'t finished yet.',
      philosophyPara2: 'Think about that: one painting, worked on for nearly two decades. No one told him he was late. No one held a deadline over his head. And yet the result became the most famous painting on Earth — not because he rushed, but because he refused to settle.',
      philosophyQuote: 'He didn\'t build something to meet a date. He built something to be extraordinary.',
      philosophyPara3: 'That\'s exactly the energy Four Dragons Inc. was founded on. Our products — games, anime, films, and everything we create — deserve that same patience. We\'d rather take our time and ship something people love than chase a calendar and ship something forgettable.',
      philosophyPara4: 'The Mona Lisa hangs in the Louvre, visited by millions every year, more than 500 years later. A rushed painting would have been forgotten the moment it was finished. The work that has no deadline is the work that changes the world.',
      footerText: 'Four Dragons Inc. Go (演劇) — Tokyo, Japan & Decentralized Worldwide',
      footerSub: 'Christopher Lee Cajes · Founder, CEO & Chairman',
      modalTitle: 'Dragon Head Symbol',
      modalText: 'The Founder loves dragons especially DRAGON Type Pokemon and Moves.',
      modalAltTitle: 'The Company Logo — The "4" Text Symbol'
    },
    ja: {
      navHome: 'ホーム',
      navFounder: '創設者の青写真',
      navValues: '四つの柱',
      navConstitution: '憲章',
      navCulture: '文化書',
      navLeadership: 'リーダーシップ',
      navWork: '働き方',
      navCreative: '創作の手引き',
      navRelations: '人間関係',
      navAikido: 'アタタカサ・アイキドー',
      navOrg: '組織',
      navBusiness: '事業計画',
      navFuture: '未来研究',
      navPhilosophy: '創造哲学',
      themeLabel: 'テーマ',
      themeDark: 'ダーク',
      themeLight: 'ライト',
      navLabel: 'ナビゲーション位置',
      navTop: '上',
      navLeft: '左',
      navRight: '右',
      langLabel: '言語',
      heroEyebrow: '日本・東京 主要拠点・世界的な分散型拠点',
      heroTitle: 'Four Dragons Inc. Go <span class="jp">（演劇）</span>',
      heroSub: '尊厳、創造的自由、そして <strong>Atatakasa（温かさ）</strong> を土台に、ゲーム・アニメ・映画・音楽を生み出す、竜と創作を愛するエンタメ帝国です。',
      heroFounder: 'クリストファー・リー・カヘス — 創業者・CEO・会長',
      heroPrimary: '創設者の青写真を読む',
      heroSecondary: '四つの柱を見る',
      founderVol: '巻 I — 創設者の青写真（心）',
      founderTitle: 'なぜ Four Dragons Inc. は存在するのか？',
      founderQuote: '「Four Dragons Inc. は、人々が本当に作りたいエンターテインメントを、情熱・目的・優しさ・芸術的自由のもとで創れる機会を与えるために存在します。私たちはエンターテインメントだけでなく、人・家族・未来の創作者も育てます。」',
      visionTitle: 'ビジョン',
      visionText: '世界で最も素晴らしいエンターテインメント企業の一つになり、同時に働きやすい最高の職場の一つになる。',
      missionTitle: 'ミッション',
      missionText: '忘れられないエンターテインメントを創る。創作者を力づける。家族を支える。子どもたちを励ます。人々の暮らしを良くする。',
      mottoTitle: 'モットー',
      mottoText: '「人を作るのではなく、創作者を作る。」',
      mindsetQuote: '「彼らが私のために働くのではない。私は彼らのために働く。」',
      mindsetText: 'リーダーの役目は、障害を取り除き、成長を支え、他者が最高の力を発揮できるようにすることです。',
      dragonSymbolTitle: '龍の頭シンボル：',
      dragonSymbolText: '創設者は特にドラゴンタイプのポケモンと技が大好きです。',
      valuesVol: '会社ロゴ — 「4」文字シンボル',
      valuesTitle: '四つの核心価値',
      valuesLead: '紋章の中心にある龍の頭は、創設者がドラゴン、特にドラゴンタイプのポケモンとその技を愛していることを表し、青と赤に分かれた数字の4は、Four Dragons Inc. の創作者が担うべき四つの柱を象徴しています。',
      pillarMissionTitle: '使命を先導する',
      pillarMissionText: '従業員はより大きなコミュニティと一体となり、会社の究極的な目的を推進する。',
      pillarHostTitle: 'ホストである',
      pillarHostText: '会社はもてなしを重視し、チームがあらゆる職務関係で思いやりと協力を持てるよう奨励する。',
      pillarAdventureTitle: '冒険を受け入れる',
      pillarAdventureText: '従業員は困難に対して希望に満ちた回復力と、学び続ける好奇心を持って向き合う。',
      pillarEntrepreneurTitle: 'シリアル起業家である',
      pillarEntrepreneurText: '大胆で時に異常な野望を現実に変えるために、決意と創造的な問題解決を重んじる。',
      constitutionVol: '巻 II — 企業憲章',
      constitutionTitle: 'ほとんど変わることのないもの',
      article1Title: 'すべての人に尊厳がある。',
      article2Title: '偉大な才能より、良き人間性を優先する。',
      article2Text: '人格は能力より重い。能力は学べる。人格は生きるものである。',
      article3Title: '腐敗ゼロ。',
      article3Text: '賄賂も、権力濫用も、忖度も、搾取も許さない。',
      article4Title: '会社は人々の人生を改善するために存在する。',
      article4Text: '利益は使命を支えるために存在する。使命に代わるものではない。',
      article5Title: '誰もが創作者である。',
      article5Text: 'チームも個人も創作できる。従業員は完全にオリジナルな企画を提案できる。情熱的なプロジェクトは奨励される。',
      article6Title: '財務最適化だけが理由の人員削減はしない。',
      article6Text: '可能なら、人を移動し、再教育し、新しい機会を作る。何があっても創設者は自分の子どもたちを守るために全力を尽くす。彼らの仕事・夢・未来が常に最優先である。',
      article7Title: '誰でも平穏に辞めて、自分の夢を追える。',
      article7Text: '会社は起業を称え、独立して自分の事業を立ち上げることは裏切りではなく成功である。元メンバーは四龍家族の一員であり続ける。',
      article8Title: 'すべての人を平等に扱う。',
      article8Text: '肩書きが価値を決めるのではない。役員もインターンも同じように尊重される。',
      article9Title: '強制参加はしない。',
      article9Quote: '「Walang sapilitan。」',
      article9Text: '個人の境界を尊重する。真の協働とは、強制ではなく意志によって成り立つ。',
      article10Title: '継続的な学習。',
      article10Text: '誰もが学び続け、誰もが教える存在である。',
      cultureVol: '巻 III — 文化書',
      cultureTitle: '私たちの価値観',
      valueKindness: '優しさ',
      valueRespect: '尊重',
      valueHonesty: '誠実',
      valuePassion: '情熱',
      valueFamily: '家族',
      valueHumility: '謙虚',
      valueCreativity: '創造性',
      valueCourage: '勇気',
      valueResponsibility: '責任',
      valueCompassion: '思いやり',
      valueCuriosity: '好奇心',
      valueGratitude: '感謝',
      valueOptimism: '楽観',
      valueService: '奉仕',
      rejectTitle: '私たちが拒絶するもの',
      rejectCorruption: '腐敗',
      rejectBullying: 'いじめ',
      rejectHarassment: '嫌がらせ',
      rejectDiscrimination: '差別',
      rejectManipulation: '操作',
      rejectCruelty: '残酷さ',
      rejectAbuse: '虐待',
      rejectPolitics: '職場の政治',
      rejectToxicCompetition: '有害な競争',
      rejectFearMgmt: '恐怖に基づくマネジメント',
      rejectToxicWork: '有害な労働文化',
      rejectMicromanage: 'マイクロマネジメント / マイクロマネージング / マイクロマネジング',
      rejectReframe1: '「Micromanage / Micromanagement / Micromanaginng」という言葉は存在しない — Four Dragons Inc. の辞書にもない。',
      rejectReframe2: '「No toxicity」と言う代わりに、何を期待するかを明確にする。<br /><br /><strong>「私たちは敬意をもって話し合う。人を批判しない。互いを支え合う。」</strong>',
      rejectQuote: '「Four Dragons Inc. は有害な労働文化に対してゼロトレランスです。上司でも仲間でも外部の人でも、安心できない環境が生まれたら創設者は動きます。彼は家族を守ります。」',
      leadershipVol: '巻 IV — リーダーシップ・ハンドブック',
      leadershipTitle: 'CEOの哲学',
      leadershipQuote1: '「私のために働くために来た人たちではない。私は彼らのために働く。」',
      leadershipQuote2: '「私は政治のために働いていない。私はエンターテイナーであり、政治家ではない。私の唯一の目的は、人々が愛する世界を創り、同じことをする創作者の家族を築くことだ。」',
      compareInstead: 'こう聞く代わりに',
      comparePrompt: '「なぜパフォーマンスが低いのか？」',
      compareLeader: 'リーダーはまずこう聞く',
      compareQuestion: '「どうしてる？」',
      checklist1: '大丈夫？',
      checklist2: '家で何か起きてる？',
      checklist3: 'どうすれば手伝える？',
      checklist4: 'どんな支援が必要？',
      leadershipLead: 'そのあとで初めて仕事のパフォーマンスを話し合う。成功は、人が元気でいることと素晴らしい成果の両方で測られる。',
      workVol: '巻 V — 働き方',
      workTitle: 'リモート・ファースト。家族・ファースト。健康・ファースト。',
      workTag1: '可能な限り柔軟な勤務時間',
      workTag2: '無駄な残業なし',
      workTag3: 'オフィス政治なし',
      workTag4: '見た目より実績',
      workTag5: '強制残業なし',
      workTag6: '顔を出すことは求めない',
      workTag7: '忙しそうに見せるふりをしない',
      workTag8: '人が幸せでいる限り留まる',
      workTag9: '「マイクロマネジ」などという言葉はここにはない',
      creativeVol: '巻 VI — 創作の手引き',
      creativeTitle: 'すべての創作者が自分の情熱を持つ。',
      creativeTeamTitle: 'チーム',
      creativeTeamText: 'チームはゲームもアニメも作れる。',
      creativeIndividualTitle: '個人',
      creativeIndividualText: '個人もゲームやアニメを作れる。',
      creativeIdeaTitle: 'あらゆるアイデア',
      creativeIdeaText: 'オリジナルなアイデアは奨励される。革新は誰のものでもない。ランクのせいでアイデアが却下されることはない。',
      relationsVol: '巻 VII — 人間関係',
      relationsTitle: '敬意は肩書きではなく行動から生まれる。',
      relationsTag1: 'No Sir. No Ma\'am.',
      relationsTag2: '過剰な会社の形式に頼らない',
      relationsTag3: '名前を使う',
      relationsTag4: '無理な友情は作らない',
      relationsTag5: '「パキキサマ」を演じない',
      relationsLead: '合意した大人同士の関係は尊重される。ただし、利害関係や他者への害を生むものは除く。',
      relationsQuote: '「パキキサマ」。ただの「パキキサマ！」ではない — Walang sapilitan.',
      aikidoVol: '巻 VIII — Four Dragons Inc. Go · Atatakasa Aikido',
      aikidoTitle: '温かさ — Atatakasa',
      aikidoLead: '温かさ。優しさ。思いやり。週末の任意プログラムで、仕事の義務ではなく、誰にでも家族や子ども、ゲストも参加できる。',
      aikidoPurposeTitle: '目的',
      aikidoPurposeText: '健康を強める。信頼を築く。ストレスを減らす。謙虚さを育む。生涯学び続けることを奨励する。',
      aikidoWeekendTitle: '週末の活動',
      aikidoWeekendText: '任意の合気道練習、瞑想、ストレッチ、茶会 — 家族参加も歓迎。',
      aikidoPhilosophyTitle: '哲学',
      aikidoPhilosophyText: '温かさ — Atatakasa. 温かさ。優しさ。思いやり。',
      aikidoLead2: 'ランクが人の価値を決めることはない。上位の来訪者には、いつでも教えるために心から歓迎する。',
      aikidoSubhead: 'Four Dragons Inc. Go · Atatakasa Aikido (温かさ) — 東京、日本',
      aikidoCard1Title: '創設者とリーダーシップ',
      aikidoCard1Text: 'クリストファー・リー・カヘスがCEO兼会長を務める。',
      aikidoCard2Title: '地理的・歴史的ランドマーク',
      aikidoCard2Text: '日本・東京を拠点とし、フィリピン出身のリーダーが日本国内の企業で会長兼CEOを務めるという、合気道発祥地での先駆的な取り組みを象徴する。これは、スティーブン・シーガルが日本の土で公式な武術組織や道場インフラを成功裏に運営した先例に重なる。',
      aikidoCard3Title: '「Atatakasa」（温かさ）の哲学',
      aikidoCard3Text: '組織名は Atatakasa から取られ、「温かさ」または「優しさ」を意味する。植芝盛平の普遍的調和への精神的ビジョンを、深い共感、心理的安全、無条件のケアに満ちた職場と練習場へと翻訳している。',
      aikidoCard4Title: '企業・メディアの焦点',
      aikidoCard4Text: 'ゲーム開発、没入型エンタメ番組制作、代替的な合気道リーダーシップを結ぶ、極めて進歩的な複業的企業帝国。',
      aikidoCard5Title: '過激な包摂性とオープン・センセイ方針',
      aikidoCard5Text: '会長が子どもたちと並んで働く、密接な家族帝国として構成されており、会社は絶対的で妥協しない構造的平等を守る。伝統的な武道の序列、ランク、段位の境界は完全に撤廃され、訪問者・会員・子どもたちがランクや背景に関係なく平等に練習・働く。拠点はオープン・ドア方針を採り、会長より上位の武道家は、日帰りまたは週末のゲスト先生として歓迎する。組織は、もし訪問があれば、月城盛矩を主導的な先生として迎えることを常に望んでいる。',
      aikidoCard6Title: '「週末 Ukemi」ヒーリング・プロトコル',
      aikidoCard6Text: '家族と会社の内なるトラウマを癒すための、Atatakasa の実践的な応用である。子どもや生徒が大きな感情的苦痛に直面したとき、会長は週末に支配的な nage（投げる側）の役割から意図的に降り、ukemi（受ける側）として彼らや上位者のために身体的な衝撃を受け入れる。伝統的な先生と生徒の力関係を逆転させることで、深い謙虚さ、相互信頼、積極的な回復の空間を作る。',
      orgVol: '巻 IX — 組織',
      orgTitle: '創作者に奉仕するための構造',
      orgLevel1: '創設者',
      orgLevel2: '会長',
      orgLevel3: 'CEO',
      orgLevel4: '日本副社長',
      orgLevel5: 'クリエイティブ・ディレクター',
      orgLevel6: '独立創作者チーム',
      orgLevel7: 'グローバルHQ — 東京',
      orgLevel8: '地域HQ',
      orgLevel9: '国別HQ',
      orgLevel10: 'リモート創作者チーム',
      businessVol: '巻 X — 事業計画',
      businessTitle: '製品',
      businessItem1: 'ビデオゲーム',
      businessItem2: 'アニメ',
      businessItem3: '映画',
      businessItem4: 'カートゥーン',
      businessItem5: '教育向け子ども向け番組',
      businessItem6: '音楽',
      businessItem7: '書籍',
      businessItem8: '配信',
      businessItem9: 'グッズ',
      businessItem10: 'テーマパーク',
      standardsTitle: 'コンテンツ基準',
      standardsLead: '創作者と開発者は、力づけ・鼓舞・人々をつなぐコンテンツを作ることが期待される。以下のテーマは、どの製品でも許可されない。',
      standard1: '残虐または過度に暴力的な内容',
      standard2: '恐怖、怖い、または不気味なイメージ',
      standard3: '不適切または成熟したテーマ',
      standard4: 'ネガティブな感情的影響を与えるもの',
      standard5: '冷笑的、絶望的、または恐怖に基づくメッセージ',
      standard6: '苦しみや絶望を正常化する内容',
      standardsLead2: 'その代わり、すべてのコンテンツは、親しみやすく希望に満ち、前向きであるべきである。私たちは勇気・優しさ・喜び・つながりを与える世界や物語を創る。Four Dragons Inc. のすべてのプロジェクトは、視聴者に以前より良い気分を残すべきである。',
      standardsList1: '+ 親しみやすく歓迎的',
      standardsList2: '+ 鼓舞的で希望に満ち',
      standardsList3: '+ 前向きで楽しさに満ち',
      standardsList4: '+ 優しく思いやり深く',
      standardsList5: '+ 勇敢で冒険的',
      futureVol: '巻 XI — 未来研究',
      futureLead: 'この本は常に進化し続ける — 人工知能、グローバル法、金融、心理学、教育、エンターテインメント、ビジネス、ゲームデザイン、アニメーション、リーダーシップ、現実的な経営哲学、健康、家族の健康など。',
      futureCardTitle: 'ひとつの提案',
      futureCardText1: 'この哲学の多くは、思いやり・自由・信頼に根ざしており、独自の会社文化を生み出しうる。一方で、どんな組織でも、共有すべき期待と調整が必要である。すべてのプロジェクト管理手法を排除する代わりに、それらをこの価値観に適合させることができる。たとえば、 blame-oriented reviews を支援的なチェックインに置き換え、厳格なプロセスではなく軽量な計画を使い、責任を押しつけるのではなく改善に役立つフィードバックを奨励する。',
      futureCardText2: 'その方法は、この核心的な考え方に忠実である：',
      futureQuote: '「人が先であり、素晴らしいエンターテインメントはそのあとに続く。」',
      futureCardText3: 'それは、長年にわたって野心的なゲーム、アニメ、映画などを作るために必要な構造を失うことなく、思いやりのある文化を作る。',
      philosophyVol: '巻 XII — 創造哲学',
      philosophyTitle: '締め切りはない。素晴らしい仕事だけがある。',
      philosophyLead1: 'Four Dragons Inc. では、創作者を急かしません。最良の仕事は、自由に探求し、試し、アイデアを息づかせることができるときに生まれます。カレンダーに追われるときではありません。',
      philosophyLine1: '「この件に関しては、時刻に追われてはいない。」',
      philosophyLine2: '「日付のプレッシャーではなく、仕事に集中している。」',
      philosophyLine3: '「締め切りが問題にならないよう、常に先回りしている。」',
      philosophyLead2: 'これらは単なるスローガンではありません。私たちは実際にそうやって働いています。恣意的な時間軸に縛られていない人は、リスクを取って試し、誇りを持てる仕事を生み出します。急ぐことは平凡さを生み、忍耐は傑作を生みます。',
      philosophySubhead: '生きた証拠 — レオナルド・ダ・ヴィンチ',
      philosophyPara1: 'この哲学を最もよく体現しているのが、レオナルド・ダ・ヴィンチ自身です。彼は <strong>16年</strong>近くかけて <em>モナ・リザ</em> を完成させました。1503年ごろから1519年に亡くなるまで、その作品を依頼主に引き渡すことはありませんでした。彼は、まだ完成していないと信じて、ただひたすら磨き続けました。',
      philosophyPara2: '考えてみてください。1枚の絵画に、ほぼ20年にわたり取り組みました。誰も彼を遅刻だと言いませんでした。誰も締め切りを突きつけませんでした。それでもその作品は地球で最も有名な絵画となりました。急いだからではなく、妥協を拒んだからです。',
      philosophyQuote: '彼は締め切りに合わせて何かを作ったのではない。並外れたものを作ったのだ。',
      philosophyPara3: 'それこそが Four Dragons Inc. が創られた原動力です。私たちの製品 — ゲーム、アニメ、映画、そして私たちが作るすべてのもの — も同じ忍耐を必要とします。私たちは、カレンダーを追いかけて忘れられる作品を出すより、時間をかけて人々に愛される作品を出したいと思っています。',
      philosophyPara4: 'モナ・リザはルーヴルに展示され、何百年も経った今でも毎年何百万人もの人々が訪れます。急いで描かれた絵画は、完成した瞬間に忘れ去られるでしょう。締め切りのない仕事こそ、世界を変える仕事です。',
      footerText: 'Four Dragons Inc. Go (演劇) — 東京、日本と分散型の世界各地',
      footerSub: 'クリストファー・リー・カヘス · 創業者・CEO・会長',
      modalTitle: '龍の頭シンボル',
      modalText: '創設者は特にドラゴンタイプのポケモンと技が大好きです。',
      modalAltTitle: '会社ロゴ — 「4」文字シンボル'
    }
  };

  /* ---------- restore saved preferences ---------- */
  const savedTheme = safeGet(STORE_KEY_THEME);
  const savedNav = safeGet(STORE_KEY_NAV);
  const savedLanguage = safeGet(STORE_KEY_LANG);
  const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  setTheme(savedTheme || (systemPrefersLight ? 'light' : 'dark'), false);
  setNavPosition(savedNav || 'top', false);
  setLanguage(savedLanguage || 'en', false);

  function safeGet(key){
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value){
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable, ignore */ }
  }

  /* ---------- language ---------- */
  function setLanguage(language, persist = true){
    html.setAttribute('data-lang', language);
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
      const key = el.getAttribute('data-i18n-key');
      const value = translations[language]?.[key];
      if (!value) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.innerHTML = value;
      }
    });
    if (langSwitch) {
      langSwitch.setAttribute('aria-checked', language === 'ja' ? 'true' : 'false');
      const active = langSwitch.querySelectorAll('.lang-switch-option');
      active.forEach(option => option.classList.toggle('active', option.dataset.lang === language));
    }
    if (persist) safeSet(STORE_KEY_LANG, language);
  }

  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      const next = html.getAttribute('data-lang') === 'ja' ? 'en' : 'ja';
      setLanguage(next);
    });
  }

  /* ---------- theme ---------- */
  function setTheme(theme, persist = true){
    html.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-choice]').forEach(btn => {
      const active = btn.dataset.themeChoice === theme;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    if (persist) safeSet(STORE_KEY_THEME, theme);
  }

  document.querySelectorAll('[data-theme-choice]').forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice));
  });

  themeToggleMobile.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  /* ---------- navbar position ---------- */
  function setNavPosition(position, persist = true){
    html.setAttribute('data-nav', position);
    document.querySelectorAll('[data-nav-choice]').forEach(btn => {
      const active = btn.dataset.navChoice === position;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    if (persist) safeSet(STORE_KEY_NAV, position);
  }

  document.querySelectorAll('[data-nav-choice]').forEach(btn => {
    btn.addEventListener('click', () => setNavPosition(btn.dataset.navChoice));
  });

  /* ---------- mobile drawer ---------- */
  function openDrawer(){
    html.classList.add('nav-open');
    scrim.classList.add('show');
    drawerToggle.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer(){
    html.classList.remove('nav-open');
    scrim.classList.remove('show');
    drawerToggle.setAttribute('aria-expanded', 'false');
  }
  drawerToggle.addEventListener('click', () => {
    html.classList.contains('nav-open') ? closeDrawer() : openDrawer();
  });
  navClose.addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('logoModal').classList.contains('open')) closeLogoModal();
      else closeDrawer();
    }
  });
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeDrawer();
  });

  /* ---------- scroll-spy active link ---------- */
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = links.find(a => a.getAttribute('href') === id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => spy.observe(sec));

  /* ---------- logo modal ---------- */
  const dragonLogoBtn = document.getElementById('dragonLogoBtn');
  const logoModal = document.getElementById('logoModal');
  const logoModalClose = document.getElementById('logoModalClose');
  const logoModalBackdrop = document.getElementById('logoModalBackdrop');

  function openLogoModal(){
    logoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLogoModal(){
    logoModal.classList.remove('open');
    document.body.style.overflow = '';
  }
  dragonLogoBtn.addEventListener('click', openLogoModal);
  logoModalClose.addEventListener('click', closeLogoModal);
  logoModalBackdrop.addEventListener('click', closeLogoModal);

  document.addEventListener('contextmenu', e => e.preventDefault());
})();
