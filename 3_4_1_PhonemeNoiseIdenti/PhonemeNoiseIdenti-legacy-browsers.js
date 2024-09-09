/*************************** 
 * Phonemenoiseidenti *
 ***************************/


// store info about the experiment session:
let expName = 'PhonemeNoiseIdenti';  // from the Builder filename that created this script
let expInfo = {
    '编号': '',
    '主试ID': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
const practice_judgementLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_judgementLoopBegin(practice_judgementLoopScheduler));
flowScheduler.add(practice_judgementLoopScheduler);
flowScheduler.add(practice_judgementLoopEnd);








flowScheduler.add(intro_realRoutineBegin());
flowScheduler.add(intro_realRoutineEachFrame());
flowScheduler.add(intro_realRoutineEnd());
const experi_realLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(experi_realLoopBegin(experi_realLoopScheduler));
flowScheduler.add(experi_realLoopScheduler);
flowScheduler.add(experi_realLoopEnd);




flowScheduler.add(exprement_goodbyeRoutineBegin());
flowScheduler.add(exprement_goodbyeRoutineEachFrame());
flowScheduler.add(exprement_goodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'data_trials_practice.xlsx', 'path': 'data_trials_practice.xlsx'},
    {'name': 'data_trials.xlsx', 'path': 'data_trials.xlsx'},
    {'name': 'intro.wav', 'path': 'intro.wav'},
    {'name': 'noise_SNR_phonemes/ba_rms.wav', 'path': 'noise_SNR_phonemes/ba_rms.wav'},
    {'name': 'noise_SNR_phonemes/ca_rms.wav', 'path': 'noise_SNR_phonemes/ca_rms.wav'},
    {'name': 'noise_SNR_phonemes/cha_rms.wav', 'path': 'noise_SNR_phonemes/cha_rms.wav'},
    {'name': 'noise_SNR_phonemes/da_rms.wav', 'path': 'noise_SNR_phonemes/da_rms.wav'},
    {'name': 'noise_SNR_phonemes/ga_rms.wav', 'path': 'noise_SNR_phonemes/ga_rms.wav'},
    {'name': 'noise_SNR_phonemes/ha_rms.wav', 'path': 'noise_SNR_phonemes/ha_rms.wav'},
    {'name': 'noise_SNR_phonemes/jia_rms.wav', 'path': 'noise_SNR_phonemes/jia_rms.wav'},
    {'name': 'noise_SNR_phonemes/ka_rms.wav', 'path': 'noise_SNR_phonemes/ka_rms.wav'},
    {'name': 'noise_SNR_phonemes/la_rms.wav', 'path': 'noise_SNR_phonemes/la_rms.wav'},
    {'name': 'noise_SNR_phonemes/ma_rms.wav', 'path': 'noise_SNR_phonemes/ma_rms.wav'},
    {'name': 'noise_SNR_phonemes/na_rms.wav', 'path': 'noise_SNR_phonemes/na_rms.wav'},
    {'name': 'noise_SNR_phonemes/pa_rms.wav', 'path': 'noise_SNR_phonemes/pa_rms.wav'},
    {'name': 'noise_SNR_phonemes/qia_rms.wav', 'path': 'noise_SNR_phonemes/qia_rms.wav'},
    {'name': 'noise_SNR_phonemes/sa_rms.wav', 'path': 'noise_SNR_phonemes/sa_rms.wav'},
    {'name': 'noise_SNR_phonemes/sha_rms.wav', 'path': 'noise_SNR_phonemes/sha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0ba_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0ba_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0ca_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0ca_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0cha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0cha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0da_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0da_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0ga_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0ga_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0ha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0ha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0jia_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0jia_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0ka_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0ka_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0la_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0la_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0ma_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0ma_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0na_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0na_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0pa_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0pa_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0qia_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0qia_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0sa_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0sa_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0sha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0sha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0ta_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0ta_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0wa_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0wa_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0xia_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0xia_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0ya_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0ya_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0za_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0za_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-0zha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-0zha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4ba_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4ba_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4ca_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4ca_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4cha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4cha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4da_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4da_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4ga_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4ga_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4ha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4ha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4jia_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4jia_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4ka_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4ka_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4la_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4la_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4ma_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4ma_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4na_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4na_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4pa_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4pa_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4qia_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4qia_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4sa_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4sa_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4sha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4sha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4ta_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4ta_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4wa_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4wa_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4xia_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4xia_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4ya_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4ya_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4za_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4za_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-4zha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-4zha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8ba_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8ba_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8ca_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8ca_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8cha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8cha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8da_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8da_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8ga_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8ga_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8ha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8ha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8jia_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8jia_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8ka_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8ka_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8la_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8la_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8ma_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8ma_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8na_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8na_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8pa_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8pa_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8qia_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8qia_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8sa_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8sa_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8sha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8sha_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8ta_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8ta_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8wa_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8wa_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8xia_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8xia_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8ya_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8ya_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8za_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8za_rms.wav'},
    {'name': 'noise_SNR_phonemes/SNR-8zha_rms.wav', 'path': 'noise_SNR_phonemes/SNR-8zha_rms.wav'},
    {'name': 'noise_SNR_phonemes/ta_rms.wav', 'path': 'noise_SNR_phonemes/ta_rms.wav'},
    {'name': 'noise_SNR_phonemes/wa_rms.wav', 'path': 'noise_SNR_phonemes/wa_rms.wav'},
    {'name': 'noise_SNR_phonemes/xia_rms.wav', 'path': 'noise_SNR_phonemes/xia_rms.wav'},
    {'name': 'noise_SNR_phonemes/ya_rms.wav', 'path': 'noise_SNR_phonemes/ya_rms.wav'},
    {'name': 'noise_SNR_phonemes/za_rms.wav', 'path': 'noise_SNR_phonemes/za_rms.wav'},
    {'name': 'noise_SNR_phonemes/zha_rms.wav', 'path': 'noise_SNR_phonemes/zha_rms.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u4e3b\u8bd5ID"]}_3_4_1_${expName}_${expInfo["\u7f16\u53f7"]}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var text;
var key_resp;
var intro_sound;
var fix_practiceClock;
var prac_fix;
var phoneme_practiceClock;
var fix_prac_sound;
var sound_practice;
var response_key_practiceClock;
var word1_prac;
var response_sound_prac;
var word2_prac;
var reponse_accClock;
var resepons_feedback;
var response_feedback_judgementClock;
var intro_practice;
var key_resp_introprac;
var intro_realClock;
var intro_real_data;
var fix2Clock;
var fix;
var phoneme_startClock;
var fix_sound;
var sound_1;
var response_keyClock;
var word1;
var response_sound;
var word2;
var exprement_goodbyeClock;
var text_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '欢迎来到噪声下音节识别任务！\n\n请在看到星号注视点时，认真听音节\n如果听到噪声干扰，请认真分辨噪声中的音节\n\n请在看到选项后，选择您听到的音节\n按z键选择屏幕左侧音节\n按m键选择屏幕右侧音节\n\n准备好请按空格开始练习\n',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  intro_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'intro.wav',
      secs: (- 1),
      });
  intro_sound.setVolume(1.0);
  // Initialize components for Routine "fix_practice"
  fix_practiceClock = new util.Clock();
  prac_fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "phoneme_practice"
  phoneme_practiceClock = new util.Clock();
  fix_prac_sound = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_prac_sound',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_practice = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 2,
      });
  sound_practice.setVolume(1.0);
  // Initialize components for Routine "response_key_practice"
  response_key_practiceClock = new util.Clock();
  word1_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'word1_prac',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  response_sound_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  word2_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'word2_prac',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "reponse_acc"
  reponse_accClock = new util.Clock();
  resepons_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'resepons_feedback',
    text: '',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "response_feedback_judgement"
  response_feedback_judgementClock = new util.Clock();
  intro_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_practice',
    text: '继续练习请按“1”\n开始任务请按“4”',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_introprac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intro_real"
  intro_realClock = new util.Clock();
  intro_real_data = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_real_data',
    text: '接下来开始正式任务！',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "fix2"
  fix2Clock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "phoneme_start"
  phoneme_startClock = new util.Clock();
  fix_sound = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_sound',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 2,
      });
  sound_1.setVolume(1.0);
  // Initialize components for Routine "response_key"
  response_keyClock = new util.Clock();
  word1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'word1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  response_sound = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  word2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'word2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "exprement_goodbye"
  exprement_goodbyeClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '实验结束。\n\n感谢您的参与！',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    intro_sound.setVolume(1.0);
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(text);
    introComponents.push(key_resp);
    introComponents.push(intro_sound);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop intro_sound
    if (t >= 0.0 && intro_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_sound.tStart = t;  // (not accounting for frame time here)
      intro_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ intro_sound.play(); });  // screen flip
      intro_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (intro_sound.getDuration() + intro_sound.tStart)     && intro_sound.status === PsychoJS.Status.STARTED) {
      intro_sound.stop();  // stop the sound (if longer than duration)
      intro_sound.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    intro_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_judgement;
function practice_judgementLoopBegin(practice_judgementLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_judgement = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_judgement'
    });
    psychoJS.experiment.addLoop(practice_judgement); // add the loop to the experiment
    currentLoop = practice_judgement;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_judgement.forEach(function() {
      snapshot = practice_judgement.getSnapshot();
    
      practice_judgementLoopScheduler.add(importConditions(snapshot));
      const experi_practiceLoopScheduler = new Scheduler(psychoJS);
      practice_judgementLoopScheduler.add(experi_practiceLoopBegin(experi_practiceLoopScheduler, snapshot));
      practice_judgementLoopScheduler.add(experi_practiceLoopScheduler);
      practice_judgementLoopScheduler.add(experi_practiceLoopEnd);
      practice_judgementLoopScheduler.add(response_feedback_judgementRoutineBegin(snapshot));
      practice_judgementLoopScheduler.add(response_feedback_judgementRoutineEachFrame());
      practice_judgementLoopScheduler.add(response_feedback_judgementRoutineEnd(snapshot));
      practice_judgementLoopScheduler.add(practice_judgementLoopEndIteration(practice_judgementLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var experi_practice;
function experi_practiceLoopBegin(experi_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    experi_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'data_trials_practice.xlsx',
      seed: undefined, name: 'experi_practice'
    });
    psychoJS.experiment.addLoop(experi_practice); // add the loop to the experiment
    currentLoop = experi_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    experi_practice.forEach(function() {
      snapshot = experi_practice.getSnapshot();
    
      experi_practiceLoopScheduler.add(importConditions(snapshot));
      experi_practiceLoopScheduler.add(fix_practiceRoutineBegin(snapshot));
      experi_practiceLoopScheduler.add(fix_practiceRoutineEachFrame());
      experi_practiceLoopScheduler.add(fix_practiceRoutineEnd(snapshot));
      experi_practiceLoopScheduler.add(phoneme_practiceRoutineBegin(snapshot));
      experi_practiceLoopScheduler.add(phoneme_practiceRoutineEachFrame());
      experi_practiceLoopScheduler.add(phoneme_practiceRoutineEnd(snapshot));
      experi_practiceLoopScheduler.add(response_key_practiceRoutineBegin(snapshot));
      experi_practiceLoopScheduler.add(response_key_practiceRoutineEachFrame());
      experi_practiceLoopScheduler.add(response_key_practiceRoutineEnd(snapshot));
      experi_practiceLoopScheduler.add(reponse_accRoutineBegin(snapshot));
      experi_practiceLoopScheduler.add(reponse_accRoutineEachFrame());
      experi_practiceLoopScheduler.add(reponse_accRoutineEnd(snapshot));
      experi_practiceLoopScheduler.add(experi_practiceLoopEndIteration(experi_practiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function experi_practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(experi_practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function experi_practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function practice_judgementLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_judgement);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_judgementLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var experi_real;
function experi_realLoopBegin(experi_realLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    experi_real = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'data_trials.xlsx',
      seed: undefined, name: 'experi_real'
    });
    psychoJS.experiment.addLoop(experi_real); // add the loop to the experiment
    currentLoop = experi_real;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    experi_real.forEach(function() {
      snapshot = experi_real.getSnapshot();
    
      experi_realLoopScheduler.add(importConditions(snapshot));
      experi_realLoopScheduler.add(fix2RoutineBegin(snapshot));
      experi_realLoopScheduler.add(fix2RoutineEachFrame());
      experi_realLoopScheduler.add(fix2RoutineEnd(snapshot));
      experi_realLoopScheduler.add(phoneme_startRoutineBegin(snapshot));
      experi_realLoopScheduler.add(phoneme_startRoutineEachFrame());
      experi_realLoopScheduler.add(phoneme_startRoutineEnd(snapshot));
      experi_realLoopScheduler.add(response_keyRoutineBegin(snapshot));
      experi_realLoopScheduler.add(response_keyRoutineEachFrame());
      experi_realLoopScheduler.add(response_keyRoutineEnd(snapshot));
      experi_realLoopScheduler.add(experi_realLoopEndIteration(experi_realLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function experi_realLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(experi_real);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function experi_realLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fix_practiceComponents;
function fix_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_practice' ---
    t = 0;
    fix_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('fix_practice.started', globalClock.getTime());
    // keep track of which components have finished
    fix_practiceComponents = [];
    fix_practiceComponents.push(prac_fix);
    
    fix_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fix_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_practice' ---
    // get current time
    t = fix_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_fix* updates
    if (t >= 0.0 && prac_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_fix.tStart = t;  // (not accounting for frame time here)
      prac_fix.frameNStart = frameN;  // exact frame index
      
      prac_fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_fix.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fix_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var trial_sound_prac;
function fix_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_practice' ---
    fix_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fix_practice.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_fixpre
    trial_sound_prac = ("noise_SNR_phonemes/" + trial_prac);
    
    sound_practice = new sound.Sound({
          win: psychoJS.window,
          value: 'A',
          secs: 2,
          });
    sound_practice.setVolume(1.0);
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var phoneme_practiceComponents;
function phoneme_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'phoneme_practice' ---
    t = 0;
    phoneme_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('phoneme_practice.started', globalClock.getTime());
    sound_practice.setValue(trial_sound_prac);
    sound_practice.secs=2;
    sound_practice.setVolume(1.0);
    // keep track of which components have finished
    phoneme_practiceComponents = [];
    phoneme_practiceComponents.push(fix_prac_sound);
    phoneme_practiceComponents.push(sound_practice);
    
    phoneme_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function phoneme_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'phoneme_practice' ---
    // get current time
    t = phoneme_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_prac_sound* updates
    if (t >= 0.0 && fix_prac_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_prac_sound.tStart = t;  // (not accounting for frame time here)
      fix_prac_sound.frameNStart = frameN;  // exact frame index
      
      fix_prac_sound.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_prac_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_prac_sound.setAutoDraw(false);
    }
    // start/stop sound_practice
    if (t >= 0.0 && sound_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_practice.tStart = t;  // (not accounting for frame time here)
      sound_practice.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_practice.play(); });  // screen flip
      sound_practice.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_practice.tStart + 0.5) {
        sound_practice.stop();  // stop the sound (if longer than duration)
        sound_practice.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    phoneme_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phoneme_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'phoneme_practice' ---
    phoneme_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('phoneme_practice.stopped', globalClock.getTime());
    sound_practice.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _response_sound_prac_allKeys;
var response_key_practiceComponents;
function response_key_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'response_key_practice' ---
    t = 0;
    response_key_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('response_key_practice.started', globalClock.getTime());
    word1_prac.setText(key_rt1_prac);
    response_sound_prac.keys = undefined;
    response_sound_prac.rt = undefined;
    _response_sound_prac_allKeys = [];
    word2_prac.setText(key_rt2_prac);
    // keep track of which components have finished
    response_key_practiceComponents = [];
    response_key_practiceComponents.push(word1_prac);
    response_key_practiceComponents.push(response_sound_prac);
    response_key_practiceComponents.push(word2_prac);
    
    response_key_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function response_key_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'response_key_practice' ---
    // get current time
    t = response_key_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *word1_prac* updates
    if (t >= 0.0 && word1_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word1_prac.tStart = t;  // (not accounting for frame time here)
      word1_prac.frameNStart = frameN;  // exact frame index
      
      word1_prac.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (word1_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      word1_prac.setAutoDraw(false);
    }
    
    // *response_sound_prac* updates
    if (t >= 0.0 && response_sound_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_sound_prac.tStart = t;  // (not accounting for frame time here)
      response_sound_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_sound_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_sound_prac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_sound_prac.clearEvents(); });
    }
    
    if (response_sound_prac.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_sound_prac.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _response_sound_prac_allKeys = _response_sound_prac_allKeys.concat(theseKeys);
      if (_response_sound_prac_allKeys.length > 0) {
        response_sound_prac.keys = _response_sound_prac_allKeys[_response_sound_prac_allKeys.length - 1].name;  // just the last key pressed
        response_sound_prac.rt = _response_sound_prac_allKeys[_response_sound_prac_allKeys.length - 1].rt;
        response_sound_prac.duration = _response_sound_prac_allKeys[_response_sound_prac_allKeys.length - 1].duration;
        // was this correct?
        if (response_sound_prac.keys == accuracy_prac) {
            response_sound_prac.corr = 1;
        } else {
            response_sound_prac.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *word2_prac* updates
    if (t >= 0.0 && word2_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word2_prac.tStart = t;  // (not accounting for frame time here)
      word2_prac.frameNStart = frameN;  // exact frame index
      
      word2_prac.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (word2_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      word2_prac.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    response_key_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var response_text;
function response_key_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'response_key_practice' ---
    response_key_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('response_key_practice.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response_sound_prac.keys === undefined) {
      if (['None','none',undefined].includes(accuracy_prac)) {
         response_sound_prac.corr = 1;  // correct non-response
      } else {
         response_sound_prac.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response_sound_prac.corr, level);
    }
    psychoJS.experiment.addData('response_sound_prac.keys', response_sound_prac.keys);
    psychoJS.experiment.addData('response_sound_prac.corr', response_sound_prac.corr);
    if (typeof response_sound_prac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_sound_prac.rt', response_sound_prac.rt);
        psychoJS.experiment.addData('response_sound_prac.duration', response_sound_prac.duration);
        routineTimer.reset();
        }
    
    response_sound_prac.stop();
    // Run 'End Routine' code from code_feedback
    if (response_sound_prac.corr) {
        response_text = "\u6b63\u786e";
    } else {
        response_text = "\u9519\u8bef\uff0c\u8bf7\u8ba4\u771f\u5206\u8fa8";
    }
    
    // the Routine "response_key_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var reponse_accComponents;
function reponse_accRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reponse_acc' ---
    t = 0;
    reponse_accClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('reponse_acc.started', globalClock.getTime());
    resepons_feedback.setText(response_text);
    // keep track of which components have finished
    reponse_accComponents = [];
    reponse_accComponents.push(resepons_feedback);
    
    reponse_accComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function reponse_accRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reponse_acc' ---
    // get current time
    t = reponse_accClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *resepons_feedback* updates
    if (t >= 0.0 && resepons_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resepons_feedback.tStart = t;  // (not accounting for frame time here)
      resepons_feedback.frameNStart = frameN;  // exact frame index
      
      resepons_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (resepons_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resepons_feedback.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reponse_accComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reponse_accRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reponse_acc' ---
    reponse_accComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('reponse_acc.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_introprac_allKeys;
var response_feedback_judgementComponents;
function response_feedback_judgementRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'response_feedback_judgement' ---
    t = 0;
    response_feedback_judgementClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('response_feedback_judgement.started', globalClock.getTime());
    key_resp_introprac.keys = undefined;
    key_resp_introprac.rt = undefined;
    _key_resp_introprac_allKeys = [];
    // keep track of which components have finished
    response_feedback_judgementComponents = [];
    response_feedback_judgementComponents.push(intro_practice);
    response_feedback_judgementComponents.push(key_resp_introprac);
    
    response_feedback_judgementComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function response_feedback_judgementRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'response_feedback_judgement' ---
    // get current time
    t = response_feedback_judgementClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_practice* updates
    if (t >= 0.0 && intro_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_practice.tStart = t;  // (not accounting for frame time here)
      intro_practice.frameNStart = frameN;  // exact frame index
      
      intro_practice.setAutoDraw(true);
    }
    
    
    // *key_resp_introprac* updates
    if (t >= 0.0 && key_resp_introprac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_introprac.tStart = t;  // (not accounting for frame time here)
      key_resp_introprac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_introprac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_introprac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_introprac.clearEvents(); });
    }
    
    if (key_resp_introprac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_introprac.getKeys({keyList: ['1', '4'], waitRelease: false});
      _key_resp_introprac_allKeys = _key_resp_introprac_allKeys.concat(theseKeys);
      if (_key_resp_introprac_allKeys.length > 0) {
        key_resp_introprac.keys = _key_resp_introprac_allKeys[_key_resp_introprac_allKeys.length - 1].name;  // just the last key pressed
        key_resp_introprac.rt = _key_resp_introprac_allKeys[_key_resp_introprac_allKeys.length - 1].rt;
        key_resp_introprac.duration = _key_resp_introprac_allKeys[_key_resp_introprac_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    response_feedback_judgementComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function response_feedback_judgementRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'response_feedback_judgement' ---
    response_feedback_judgementComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('response_feedback_judgement.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_introprac.corr, level);
    }
    psychoJS.experiment.addData('key_resp_introprac.keys', key_resp_introprac.keys);
    if (typeof key_resp_introprac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_introprac.rt', key_resp_introprac.rt);
        psychoJS.experiment.addData('key_resp_introprac.duration', key_resp_introprac.duration);
        routineTimer.reset();
        }
    
    key_resp_introprac.stop();
    // Run 'End Routine' code from code_3
    if ((key_resp_introprac.keys === "4")) {
        practice_judgement.finished = true;
    } else {
        practice_judgement.finished = false;
    }
    
    // the Routine "response_feedback_judgement" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_realComponents;
function intro_realRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_real' ---
    t = 0;
    intro_realClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('intro_real.started', globalClock.getTime());
    // keep track of which components have finished
    intro_realComponents = [];
    intro_realComponents.push(intro_real_data);
    
    intro_realComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function intro_realRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_real' ---
    // get current time
    t = intro_realClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_real_data* updates
    if (t >= 0.0 && intro_real_data.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_real_data.tStart = t;  // (not accounting for frame time here)
      intro_real_data.frameNStart = frameN;  // exact frame index
      
      intro_real_data.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (intro_real_data.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      intro_real_data.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    intro_realComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_realRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_real' ---
    intro_realComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro_real.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_sound;
var fix2Components;
function fix2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix2' ---
    t = 0;
    fix2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('fix2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    trial_sound = ("noise_SNR_phonemes/" + trial);
    
    sound_1 = new sound.Sound({
          win: psychoJS.window,
          value: 'A',
          secs: 2,
          });
    sound_1.setVolume(1.0);
    // keep track of which components have finished
    fix2Components = [];
    fix2Components.push(fix);
    
    fix2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fix2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix2' ---
    // get current time
    t = fix2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fix2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix2' ---
    fix2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fix2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var phoneme_startComponents;
function phoneme_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'phoneme_start' ---
    t = 0;
    phoneme_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('phoneme_start.started', globalClock.getTime());
    sound_1.setValue(trial_sound);
    sound_1.secs=2;
    sound_1.setVolume(1.0);
    // keep track of which components have finished
    phoneme_startComponents = [];
    phoneme_startComponents.push(fix_sound);
    phoneme_startComponents.push(sound_1);
    
    phoneme_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function phoneme_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'phoneme_start' ---
    // get current time
    t = phoneme_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_sound* updates
    if (t >= 0.0 && fix_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_sound.tStart = t;  // (not accounting for frame time here)
      fix_sound.frameNStart = frameN;  // exact frame index
      
      fix_sound.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_sound.setAutoDraw(false);
    }
    // start/stop sound_1
    if (t >= 0.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_1.tStart + 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
        sound_1.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    phoneme_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phoneme_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'phoneme_start' ---
    phoneme_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('phoneme_start.stopped', globalClock.getTime());
    sound_1.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _response_sound_allKeys;
var response_keyComponents;
function response_keyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'response_key' ---
    t = 0;
    response_keyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('response_key.started', globalClock.getTime());
    word1.setText(key_rt1);
    response_sound.keys = undefined;
    response_sound.rt = undefined;
    _response_sound_allKeys = [];
    word2.setText(key_rt2);
    // keep track of which components have finished
    response_keyComponents = [];
    response_keyComponents.push(word1);
    response_keyComponents.push(response_sound);
    response_keyComponents.push(word2);
    
    response_keyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function response_keyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'response_key' ---
    // get current time
    t = response_keyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *word1* updates
    if (t >= 0.0 && word1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word1.tStart = t;  // (not accounting for frame time here)
      word1.frameNStart = frameN;  // exact frame index
      
      word1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (word1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      word1.setAutoDraw(false);
    }
    
    // *response_sound* updates
    if (t >= 0.0 && response_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_sound.tStart = t;  // (not accounting for frame time here)
      response_sound.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_sound.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_sound.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_sound.clearEvents(); });
    }
    
    if (response_sound.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_sound.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _response_sound_allKeys = _response_sound_allKeys.concat(theseKeys);
      if (_response_sound_allKeys.length > 0) {
        response_sound.keys = _response_sound_allKeys[_response_sound_allKeys.length - 1].name;  // just the last key pressed
        response_sound.rt = _response_sound_allKeys[_response_sound_allKeys.length - 1].rt;
        response_sound.duration = _response_sound_allKeys[_response_sound_allKeys.length - 1].duration;
        // was this correct?
        if (response_sound.keys == accuracy) {
            response_sound.corr = 1;
        } else {
            response_sound.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *word2* updates
    if (t >= 0.0 && word2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word2.tStart = t;  // (not accounting for frame time here)
      word2.frameNStart = frameN;  // exact frame index
      
      word2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (word2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      word2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    response_keyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function response_keyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'response_key' ---
    response_keyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('response_key.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response_sound.keys === undefined) {
      if (['None','none',undefined].includes(accuracy)) {
         response_sound.corr = 1;  // correct non-response
      } else {
         response_sound.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response_sound.corr, level);
    }
    psychoJS.experiment.addData('response_sound.keys', response_sound.keys);
    psychoJS.experiment.addData('response_sound.corr', response_sound.corr);
    if (typeof response_sound.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_sound.rt', response_sound.rt);
        psychoJS.experiment.addData('response_sound.duration', response_sound.duration);
        routineTimer.reset();
        }
    
    response_sound.stop();
    // the Routine "response_key" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exprement_goodbyeComponents;
function exprement_goodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exprement_goodbye' ---
    t = 0;
    exprement_goodbyeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('exprement_goodbye.started', globalClock.getTime());
    // keep track of which components have finished
    exprement_goodbyeComponents = [];
    exprement_goodbyeComponents.push(text_3);
    
    exprement_goodbyeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exprement_goodbyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exprement_goodbye' ---
    // get current time
    t = exprement_goodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exprement_goodbyeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exprement_goodbyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exprement_goodbye' ---
    exprement_goodbyeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exprement_goodbye.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
