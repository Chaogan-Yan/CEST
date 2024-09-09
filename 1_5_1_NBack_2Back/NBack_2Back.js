/******************** 
 * Nback_2Back *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'NBack_2Back';  // from the Builder filename that created this script
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
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(instr_2RoutineBegin());
flowScheduler.add(instr_2RoutineEachFrame());
flowScheduler.add(instr_2RoutineEnd());
flowScheduler.add(instr_3RoutineBegin());
flowScheduler.add(instr_3RoutineEachFrame());
flowScheduler.add(instr_3RoutineEnd());
flowScheduler.add(instr_3_1RoutineBegin());
flowScheduler.add(instr_3_1RoutineEachFrame());
flowScheduler.add(instr_3_1RoutineEnd());
const practice_judgementLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_judgementLoopBegin(practice_judgementLoopScheduler));
flowScheduler.add(practice_judgementLoopScheduler);
flowScheduler.add(practice_judgementLoopEnd);
















flowScheduler.add(instr_4RoutineBegin());
flowScheduler.add(instr_4RoutineEachFrame());
flowScheduler.add(instr_4RoutineEnd());
flowScheduler.add(instr_4_3RoutineBegin());
flowScheduler.add(instr_4_3RoutineEachFrame());
flowScheduler.add(instr_4_3RoutineEnd());
flowScheduler.add(instr_4_1RoutineBegin());
flowScheduler.add(instr_4_1RoutineEachFrame());
flowScheduler.add(instr_4_1RoutineEnd());
flowScheduler.add(instr_4_2RoutineBegin());
flowScheduler.add(instr_4_2RoutineEachFrame());
flowScheduler.add(instr_4_2RoutineEnd());
const prac_block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_block_loopLoopBegin(prac_block_loopLoopScheduler));
flowScheduler.add(prac_block_loopLoopScheduler);
flowScheduler.add(prac_block_loopLoopEnd);








flowScheduler.add(instr_5RoutineBegin());
flowScheduler.add(instr_5RoutineEachFrame());
flowScheduler.add(instr_5RoutineEnd());
const block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_loopLoopBegin(block_loopLoopScheduler));
flowScheduler.add(block_loopLoopScheduler);
flowScheduler.add(block_loopLoopEnd);







flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'trials_loop_zm.xlsx', 'path': 'trials_loop_zm.xlsx'},
    {'name': 'trials_loop_zm.xlsx', 'path': 'trials_loop_zm.xlsx'},
    {'name': 'audio/instr.wav', 'path': 'audio/instr.wav'},
    {'name': 'sm_example_new.png', 'path': 'sm_example_new.png'},
    {'name': 'audio/instr_2.wav', 'path': 'audio/instr_2.wav'},
    {'name': 'diff_example_new.png', 'path': 'diff_example_new.png'},
    {'name': 'audio/instr_3.wav', 'path': 'audio/instr_3.wav'},
    {'name': 'audio/instr_3_1.wav', 'path': 'audio/instr_3_1.wav'},
    {'name': 'audio/instr_3_2.wav', 'path': 'audio/instr_3_2.wav'},
    {'name': 'audio/instr_3_3.wav', 'path': 'audio/instr_3_3.wav'},
    {'name': 'audio/instr_3_5.wav', 'path': 'audio/instr_3_5.wav'},
    {'name': 'audio/instr_3_7.wav', 'path': 'audio/instr_3_7.wav'},
    {'name': 'audio/instr_3_9.wav', 'path': 'audio/instr_3_9.wav'},
    {'name': 'audio/instr_4.wav', 'path': 'audio/instr_4.wav'},
    {'name': 'audio/instr_4_3.wav', 'path': 'audio/instr_4_3.wav'},
    {'name': 'audio/instr_4_1.wav', 'path': 'audio/instr_4_1.wav'},
    {'name': 'audio/instr_4_2.wav', 'path': 'audio/instr_4_2.wav'},
    {'name': 'audio/instr_5.wav', 'path': 'audio/instr_5.wav'},
    {'name': 'audio/prac_rest_instr_1.wav', 'path': 'audio/prac_rest_instr_1.wav'},
    {'name': 'audio/prac_rest_instr_2.wav', 'path': 'audio/prac_rest_instr_2.wav'},
    {'name': 'audio/noresp.wav', 'path': 'audio/noresp.wav'},
    {'name': 'audio/tooslow.wav', 'path': 'audio/tooslow.wav'},
    {'name': 'audio/wrong.wav', 'path': 'audio/wrong.wav'},
    {'name': 'audio/correct.wav', 'path': 'audio/correct.wav'},
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
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u4e3b\u8bd5ID"]}_1_5_1_${expName}_${expInfo["\u7f16\u53f7"]}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var welpage;
var instr_key_resp;
var instr_sound;
var instr_2Clock;
var welpage_2;
var welpage_2_2;
var same_e_g;
var instr_key_resp_2;
var instr_2_sound;
var instr_3Clock;
var welpage_3;
var welpage_3_2;
var different_e_g;
var instr_key_resp_3;
var instr_3_sound;
var instr_3_1Clock;
var welpage_3_1;
var instr_key_resp_3_1;
var instr_3_1_sound;
var instr_3_2Clock;
var text_9;
var text;
var instr_3_2_sound;
var instr_3_3Clock;
var text_2;
var key_resp_2;
var instr_3_3_sound;
var instr_3_4Clock;
var text_10;
var text_3;
var instr_3_4_sound;
var instr_3_5Clock;
var text_4;
var key_resp_3;
var instr_3_5_sound;
var instr_3_6Clock;
var text_12;
var text_5;
var text_11;
var key_resp_4;
var instr_3_6_sound;
var instr_3_7Clock;
var text_6;
var text_7;
var text_13;
var text_8;
var text_14;
var key_resp_5;
var instr_3_7_sound;
var instr_3_8Clock;
var text_15;
var text_16;
var text_17;
var key_resp_6;
var instr_3_8_sound;
var instr_3_9Clock;
var text_18;
var text_19;
var text_23;
var text_20;
var text_21;
var text_22;
var key_resp_7;
var instr_3_9_sound;
var instr_3_10Clock;
var text_24;
var text_25;
var text_26;
var key_resp_8;
var instr_3_8_sound_2;
var instr_3_11Clock;
var text_27;
var text_28;
var text_29;
var text_30;
var text_31;
var text_41;
var text_32;
var key_resp_9;
var instr_3_9_sound_2;
var instr_3_12Clock;
var text_33;
var text_34;
var text_35;
var key_resp_10;
var instr_3_6_sound_2;
var instr_3_13Clock;
var text_36;
var text_37;
var text_38;
var text_39;
var text_40;
var text_42;
var text_43;
var text_44;
var key_resp_11;
var instr_3_9_sound_3;
var end_prac_judgeClock;
var into_prac;
var key_into_prac;
var instr_4Clock;
var welpage_4;
var instr_key_resp_4;
var instr_4_sound;
var instr_4_3Clock;
var welpage_7;
var instr_key_resp_8;
var instr_4_sound_2;
var instr_4_1Clock;
var welpage_5;
var instr_key_resp_6;
var instr_4_1_sound;
var instr_4_2Clock;
var welpage_6;
var instr_key_resp_7;
var instr_4_2_sound;
var prac_restClock;
var prac_rest_text;
var prac_rest_instr;
var prac_rest_key_resp;
var prac_rest_sound;
var prac_fixationClock;
var prac_fix;
var prac_expClock;
var count;
var tempnum;
var num;
var exp_corr;
var exp_rt;
var prac_feedb;
var prac_feedbColor;
var prac_stimu;
var prac_blank;
var prac_key_resp;
var prac_trial_fbClock;
var prac_feedb_text;
var prac_feedb_sound;
var prac_block_fbClock;
var block_feedb;
var exp_acc;
var exp_meanRT;
var prac_block_feedb_text;
var prac_block_fb_key_resp;
var instr_5Clock;
var welpage_exp;
var instr_key_resp_5;
var instr_sound_5;
var fixationClock;
var fix;
var expClock;
var stimu;
var blank;
var key_resp;
var block_fbClock;
var block_feedb_text;
var block_fb_key_resp;
var restClock;
var rest_text;
var blockn;
var text_rest;
var contn;
var mouse_contn;
var thanksClock;
var endpage;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  welpage = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage',
    text: '欢迎来到2-back实验！\n\n在这个实验中，您会依序在屏幕上看到不同的数字。\n\n如果现在这个数字和往前数第2个数字是一样的，\n请按 z 键，\n\n如果现在这个数字和往前数第2个数字是不同的，\n请按 m 键。\n\n\n请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr.wav',
      secs: (- 1),
      });
  instr_sound.setVolume(1.0);
  // Initialize components for Routine "instr_2"
  instr_2Clock = new util.Clock();
  welpage_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_2',
    text: '例如，在下面这种情况下，\n\n当前数字和往前数第2个数字是一样的，\n所以应该按 z 键。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welpage_2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_2_2',
    text: '请按 z 键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  same_e_g = new visual.ImageStim({
    win : psychoJS.window,
    name : 'same_e_g', units : undefined, 
    image : 'sm_example_new.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  instr_key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_2_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_2.wav',
      secs: (- 1),
      });
  instr_2_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3"
  instr_3Clock = new util.Clock();
  welpage_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_3',
    text: '在下面这种情况下，\n\n当前数字和往前数第2个数字是不同的，\n所以应该按 m 键。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welpage_3_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_3_2',
    text: '请按 m 键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  different_e_g = new visual.ImageStim({
    win : psychoJS.window,
    name : 'different_e_g', units : undefined, 
    image : 'diff_example_new.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  instr_key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3.wav',
      secs: (- 1),
      });
  instr_3_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_1"
  instr_3_1Clock = new util.Clock();
  welpage_3_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_3_1',
    text: '每次实验开头的前两个数字无法与其它数字进行比对，\n因此无需做出反应，\n\n也就是说，您需要从第三个数字呈现时开始做出反应。\n\n\n请按空格键继续。\n',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key_resp_3_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_1_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_1.wav',
      secs: (- 1),
      });
  instr_3_1_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_2"
  instr_3_2Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '请判断：这个数字与往前数第2个数字 相同 还是 不同？',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '5',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  instr_3_2_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_2.wav',
      secs: (- 1),
      });
  instr_3_2_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_3"
  instr_3_3Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '正确答案是 不作反应 ，因为往前数两个没有数字。\n\n\n请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_3_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_3.wav',
      secs: (- 1),
      });
  instr_3_3_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_4"
  instr_3_4Clock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '请判断：这个数字与往前数第2个数字 相同 还是 不同？',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '3\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  instr_3_4_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_2.wav',
      secs: (- 1),
      });
  instr_3_4_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_5"
  instr_3_5Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '正确答案同样是 不作反应 ，因为往前数两个没有数字。\n\n\n请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_5_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_5.wav',
      secs: (- 1),
      });
  instr_3_5_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_6"
  instr_3_6Clock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '请判断：这个数字与往前数第2个数字 相同 还是 不同？',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '7\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '相同                      不同\n 按z键                    按m键',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_6_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_2.wav',
      secs: (- 1),
      });
  instr_3_6_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_7"
  instr_3_7Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '正确答案是 不同 ，因为当前数字跟往前数第2个数字不同。\n',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '7\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.1), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '5',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -3.0 
  });
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_7_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_7.wav',
      secs: (- 1),
      });
  instr_3_7_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_8"
  instr_3_8Clock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '请判断：这个数字与往前数第2个数字 相同 还是 不同？',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '3\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: '相同                      不同\n 按z键                    按m键',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_8_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_2.wav',
      secs: (- 1),
      });
  instr_3_8_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_9"
  instr_3_9Clock = new util.Clock();
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: '正确答案是 相同 ，因为当前数字跟往前数第2个数字是一样的。\n',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: '3\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.3569, 1.0, (- 0.6314)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: '7',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.1), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.3569, 1.0, (- 0.6314)]),  opacity: undefined,
    depth: -3.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: '5',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -4.0 
  });
  
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: '请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_9_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_9.wav',
      secs: (- 1),
      });
  instr_3_9_sound.setVolume(1.0);
  // Initialize components for Routine "instr_3_10"
  instr_3_10Clock = new util.Clock();
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: '请判断：这个数字与往前数第2个数字 相同 还是 不同？',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: '7\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: '相同                      不同\n 按z键                    按m键',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_8_sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_2.wav',
      secs: (- 1),
      });
  instr_3_8_sound_2.setVolume(1.0);
  // Initialize components for Routine "instr_3_11"
  instr_3_11Clock = new util.Clock();
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '正确答案是 相同 ，因为当前数字跟往前数第2个数字是一样的。\n',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: '7\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.3569, 1.0, (- 0.6314)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.1), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: '7',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.3569, 1.0, (- 0.6314)]),  opacity: undefined,
    depth: -3.0 
  });
  
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -4.0 
  });
  
  text_41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_41',
    text: '5',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: '请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_9_sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_9.wav',
      secs: (- 1),
      });
  instr_3_9_sound_2.setVolume(1.0);
  // Initialize components for Routine "instr_3_12"
  instr_3_12Clock = new util.Clock();
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: '请判断：这个数字与往前数第2个数字 相同 还是 不同？',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_34',
    text: '2\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_35',
    text: '相同                      不同\n 按z键                    按m键',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_6_sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_2.wav',
      secs: (- 1),
      });
  instr_3_6_sound_2.setVolume(1.0);
  // Initialize components for Routine "instr_3_13"
  instr_3_13Clock = new util.Clock();
  text_36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_36',
    text: '正确答案是 不同 ，因为当前数字跟往前数第2个数字不同。\n',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_37',
    text: '2\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_38 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_38',
    text: '7',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.1), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  text_39 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_39',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -3.0 
  });
  
  text_40 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_40',
    text: '7',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -4.0 
  });
  
  text_42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_42',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_43',
    text: '5',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), 0.03], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_44',
    text: '请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_3_9_sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3_7.wav',
      secs: (- 1),
      });
  instr_3_9_sound_3.setVolume(1.0);
  // Initialize components for Routine "end_prac_judge"
  end_prac_judgeClock = new util.Clock();
  into_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'into_prac',
    text: '重复实验说明请按“1”\n\n进入练习请按“4”',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_into_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_4"
  instr_4Clock = new util.Clock();
  welpage_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_4',
    text: '现在请试一试。\n\n请保持注视屏幕上的“+”注视点，\n并在看到数字后立即做出反应。\n\n\n请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_4_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_4.wav',
      secs: (- 1),
      });
  instr_4_sound.setVolume(1.0);
  // Initialize components for Routine "instr_4_3"
  instr_4_3Clock = new util.Clock();
  welpage_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_7',
    text: '您的任务是判断当前显示的数字是否与\n往前数第2个位置显示的数字相同。\n\n如果相同，请按下键盘上的 z 键；\n如果不同，请按下 m 键。\n\n\n请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_4_sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_4_3.wav',
      secs: (- 1),
      });
  instr_4_sound_2.setVolume(1.0);
  // Initialize components for Routine "instr_4_1"
  instr_4_1Clock = new util.Clock();
  welpage_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_5',
    text: '请注意，在下面的实验中，\n数字会很快消失，\n因此，请试着在保证正确的同时尽可能快地回答。\n\n\n请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_4_1_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_4_1.wav',
      secs: (- 1),
      });
  instr_4_1_sound.setVolume(1.0);
  // Initialize components for Routine "instr_4_2"
  instr_4_2Clock = new util.Clock();
  welpage_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_6',
    text: '如果您回答错误，继续回答下一题即可。\n记得，回答完之后把手指保持在 z 键和 m 键上。\n\n\n请按空格键继续。\n',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_4_2_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_4_2.wav',
      secs: (- 1),
      });
  instr_4_2_sound.setVolume(1.0);
  // Initialize components for Routine "prac_rest"
  prac_restClock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  prac_rest_text = "";
  
  prac_rest_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_rest_instr',
    text: '',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  prac_rest_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  prac_rest_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  prac_rest_sound.setVolume(1.0);
  // Initialize components for Routine "prac_fixation"
  prac_fixationClock = new util.Clock();
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
  
  // Initialize components for Routine "prac_exp"
  prac_expClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  count = 0;
  tempnum = [];
  num = 0;
  exp_corr = [];
  exp_rt = [];
  prac_feedb = "";
  prac_feedbColor = "";
  
  prac_stimu = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_stimu',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  prac_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_blank',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  prac_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_trial_fb"
  prac_trial_fbClock = new util.Clock();
  prac_feedb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_feedb_text',
    text: '',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  prac_feedb_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 0.65,
      });
  prac_feedb_sound.setVolume(1.0);
  // Initialize components for Routine "prac_block_fb"
  prac_block_fbClock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  block_feedb = "";
  exp_acc = 0;
  exp_meanRT = 0
  prac_block_feedb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_block_feedb_text',
    text: '',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  prac_block_fb_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_5"
  instr_5Clock = new util.Clock();
  welpage_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_exp',
    text: '做得好！练习结束了。\n\n让我们开始正式实验吧。\n请注意，正式实验中不再提供正误反馈。\n\n记得，在看到数字后立即做出反应，\n试着在保证正确的同时尽可能快地回答。\n\n\n请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_sound_5 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_5.wav',
      secs: (- 1),
      });
  instr_sound_5.setVolume(1.0);
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
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
  
  // Initialize components for Routine "exp"
  expClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  count = 0;
  tempnum = [];
  num = 0;
  exp_corr = [];
  exp_rt = [];
  prac_feedb = "";
  prac_feedbColor = "";
  
  stimu = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimu',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block_fb"
  block_fbClock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  block_feedb = "";
  
  block_feedb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_feedb_text',
    text: '',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  block_fb_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  // Run 'Begin Experiment' code from code_7
  rest_text = "";
  blockn = 0;
  
  text_rest = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_rest',
    text: '',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  contn = new visual.TextStim({
    win: psychoJS.window,
    name: 'contn',
    text: '继续',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_contn = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_contn.mouseClock = new util.Clock();
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  endpage = new visual.TextStim({
    win: psychoJS.window,
    name: 'endpage',
    text: '实验结束。\n\n感谢您的参与！',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
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
var _instr_key_resp_allKeys;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instr_key_resp.keys = undefined;
    instr_key_resp.rt = undefined;
    _instr_key_resp_allKeys = [];
    instr_sound.setVolume(1.0);
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(welpage);
    instrComponents.push(instr_key_resp);
    instrComponents.push(instr_sound);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welpage* updates
    if (t >= 0.0 && welpage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage.tStart = t;  // (not accounting for frame time here)
      welpage.frameNStart = frameN;  // exact frame index
      
      welpage.setAutoDraw(true);
    }
    
    
    // *instr_key_resp* updates
    if (t >= 0.0 && instr_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp.tStart = t;  // (not accounting for frame time here)
      instr_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp.clearEvents(); });
    }
    
    if (instr_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_allKeys = _instr_key_resp_allKeys.concat(theseKeys);
      if (_instr_key_resp_allKeys.length > 0) {
        instr_key_resp.keys = _instr_key_resp_allKeys[_instr_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp.rt = _instr_key_resp_allKeys[_instr_key_resp_allKeys.length - 1].rt;
        instr_key_resp.duration = _instr_key_resp_allKeys[_instr_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_sound
    if (t >= 0.0 && instr_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_sound.tStart = t;  // (not accounting for frame time here)
      instr_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_sound.play(); });  // screen flip
      instr_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_sound.getDuration() + instr_sound.tStart)     && instr_sound.status === PsychoJS.Status.STARTED) {
      instr_sound.stop();  // stop the sound (if longer than duration)
      instr_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_resp.corr, level);
    }
    psychoJS.experiment.addData('instr_key_resp.keys', instr_key_resp.keys);
    if (typeof instr_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp.rt', instr_key_resp.rt);
        psychoJS.experiment.addData('instr_key_resp.duration', instr_key_resp.duration);
        routineTimer.reset();
        }
    
    instr_key_resp.stop();
    instr_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_key_resp_2_allKeys;
var instr_2Components;
function instr_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_2' ---
    t = 0;
    instr_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_2.started', globalClock.getTime());
    instr_key_resp_2.keys = undefined;
    instr_key_resp_2.rt = undefined;
    _instr_key_resp_2_allKeys = [];
    instr_2_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_2Components = [];
    instr_2Components.push(welpage_2);
    instr_2Components.push(welpage_2_2);
    instr_2Components.push(same_e_g);
    instr_2Components.push(instr_key_resp_2);
    instr_2Components.push(instr_2_sound);
    
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_2' ---
    // get current time
    t = instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welpage_2* updates
    if (t >= 0.0 && welpage_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_2.tStart = t;  // (not accounting for frame time here)
      welpage_2.frameNStart = frameN;  // exact frame index
      
      welpage_2.setAutoDraw(true);
    }
    
    
    // *welpage_2_2* updates
    if (t >= 0.0 && welpage_2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_2_2.tStart = t;  // (not accounting for frame time here)
      welpage_2_2.frameNStart = frameN;  // exact frame index
      
      welpage_2_2.setAutoDraw(true);
    }
    
    
    // *same_e_g* updates
    if (t >= 0.0 && same_e_g.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      same_e_g.tStart = t;  // (not accounting for frame time here)
      same_e_g.frameNStart = frameN;  // exact frame index
      
      same_e_g.setAutoDraw(true);
    }
    
    
    // *instr_key_resp_2* updates
    if (t >= 0.0 && instr_key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp_2.tStart = t;  // (not accounting for frame time here)
      instr_key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_2.clearEvents(); });
    }
    
    if (instr_key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp_2.getKeys({keyList: ['z'], waitRelease: false});
      _instr_key_resp_2_allKeys = _instr_key_resp_2_allKeys.concat(theseKeys);
      if (_instr_key_resp_2_allKeys.length > 0) {
        instr_key_resp_2.keys = _instr_key_resp_2_allKeys[_instr_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp_2.rt = _instr_key_resp_2_allKeys[_instr_key_resp_2_allKeys.length - 1].rt;
        instr_key_resp_2.duration = _instr_key_resp_2_allKeys[_instr_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_2_sound
    if (t >= 0.0 && instr_2_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_2_sound.tStart = t;  // (not accounting for frame time here)
      instr_2_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_2_sound.play(); });  // screen flip
      instr_2_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_2_sound.getDuration() + instr_2_sound.tStart)     && instr_2_sound.status === PsychoJS.Status.STARTED) {
      instr_2_sound.stop();  // stop the sound (if longer than duration)
      instr_2_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_2' ---
    for (const thisComponent of instr_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('instr_key_resp_2.keys', instr_key_resp_2.keys);
    if (typeof instr_key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp_2.rt', instr_key_resp_2.rt);
        psychoJS.experiment.addData('instr_key_resp_2.duration', instr_key_resp_2.duration);
        routineTimer.reset();
        }
    
    instr_key_resp_2.stop();
    instr_2_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_key_resp_3_allKeys;
var instr_3Components;
function instr_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3' ---
    t = 0;
    instr_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3.started', globalClock.getTime());
    instr_key_resp_3.keys = undefined;
    instr_key_resp_3.rt = undefined;
    _instr_key_resp_3_allKeys = [];
    instr_3_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3Components = [];
    instr_3Components.push(welpage_3);
    instr_3Components.push(welpage_3_2);
    instr_3Components.push(different_e_g);
    instr_3Components.push(instr_key_resp_3);
    instr_3Components.push(instr_3_sound);
    
    for (const thisComponent of instr_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3' ---
    // get current time
    t = instr_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welpage_3* updates
    if (t >= 0.0 && welpage_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_3.tStart = t;  // (not accounting for frame time here)
      welpage_3.frameNStart = frameN;  // exact frame index
      
      welpage_3.setAutoDraw(true);
    }
    
    
    // *welpage_3_2* updates
    if (t >= 0.0 && welpage_3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_3_2.tStart = t;  // (not accounting for frame time here)
      welpage_3_2.frameNStart = frameN;  // exact frame index
      
      welpage_3_2.setAutoDraw(true);
    }
    
    
    // *different_e_g* updates
    if (t >= 0.0 && different_e_g.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      different_e_g.tStart = t;  // (not accounting for frame time here)
      different_e_g.frameNStart = frameN;  // exact frame index
      
      different_e_g.setAutoDraw(true);
    }
    
    
    // *instr_key_resp_3* updates
    if (t >= 0.0 && instr_key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp_3.tStart = t;  // (not accounting for frame time here)
      instr_key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_3.clearEvents(); });
    }
    
    if (instr_key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp_3.getKeys({keyList: ['m'], waitRelease: false});
      _instr_key_resp_3_allKeys = _instr_key_resp_3_allKeys.concat(theseKeys);
      if (_instr_key_resp_3_allKeys.length > 0) {
        instr_key_resp_3.keys = _instr_key_resp_3_allKeys[_instr_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp_3.rt = _instr_key_resp_3_allKeys[_instr_key_resp_3_allKeys.length - 1].rt;
        instr_key_resp_3.duration = _instr_key_resp_3_allKeys[_instr_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_sound
    if (t >= 0.0 && instr_3_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_sound.play(); });  // screen flip
      instr_3_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_sound.getDuration() + instr_3_sound.tStart)     && instr_3_sound.status === PsychoJS.Status.STARTED) {
      instr_3_sound.stop();  // stop the sound (if longer than duration)
      instr_3_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3' ---
    for (const thisComponent of instr_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('instr_key_resp_3.keys', instr_key_resp_3.keys);
    if (typeof instr_key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp_3.rt', instr_key_resp_3.rt);
        psychoJS.experiment.addData('instr_key_resp_3.duration', instr_key_resp_3.duration);
        routineTimer.reset();
        }
    
    instr_key_resp_3.stop();
    instr_3_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_key_resp_3_1_allKeys;
var instr_3_1Components;
function instr_3_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_1' ---
    t = 0;
    instr_3_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_1.started', globalClock.getTime());
    instr_key_resp_3_1.keys = undefined;
    instr_key_resp_3_1.rt = undefined;
    _instr_key_resp_3_1_allKeys = [];
    instr_3_1_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3_1Components = [];
    instr_3_1Components.push(welpage_3_1);
    instr_3_1Components.push(instr_key_resp_3_1);
    instr_3_1Components.push(instr_3_1_sound);
    
    for (const thisComponent of instr_3_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_1' ---
    // get current time
    t = instr_3_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welpage_3_1* updates
    if (t >= 0.0 && welpage_3_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_3_1.tStart = t;  // (not accounting for frame time here)
      welpage_3_1.frameNStart = frameN;  // exact frame index
      
      welpage_3_1.setAutoDraw(true);
    }
    
    
    // *instr_key_resp_3_1* updates
    if (t >= 0.0 && instr_key_resp_3_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp_3_1.tStart = t;  // (not accounting for frame time here)
      instr_key_resp_3_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp_3_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_3_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_3_1.clearEvents(); });
    }
    
    if (instr_key_resp_3_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp_3_1.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_3_1_allKeys = _instr_key_resp_3_1_allKeys.concat(theseKeys);
      if (_instr_key_resp_3_1_allKeys.length > 0) {
        instr_key_resp_3_1.keys = _instr_key_resp_3_1_allKeys[_instr_key_resp_3_1_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp_3_1.rt = _instr_key_resp_3_1_allKeys[_instr_key_resp_3_1_allKeys.length - 1].rt;
        instr_key_resp_3_1.duration = _instr_key_resp_3_1_allKeys[_instr_key_resp_3_1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_1_sound
    if (t >= 0.0 && instr_3_1_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_1_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_1_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_1_sound.play(); });  // screen flip
      instr_3_1_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_1_sound.getDuration() + instr_3_1_sound.tStart)     && instr_3_1_sound.status === PsychoJS.Status.STARTED) {
      instr_3_1_sound.stop();  // stop the sound (if longer than duration)
      instr_3_1_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_1' ---
    for (const thisComponent of instr_3_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_resp_3_1.corr, level);
    }
    psychoJS.experiment.addData('instr_key_resp_3_1.keys', instr_key_resp_3_1.keys);
    if (typeof instr_key_resp_3_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp_3_1.rt', instr_key_resp_3_1.rt);
        psychoJS.experiment.addData('instr_key_resp_3_1.duration', instr_key_resp_3_1.duration);
        routineTimer.reset();
        }
    
    instr_key_resp_3_1.stop();
    instr_3_1_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_1" was not non-slip safe, so reset the non-slip timer
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
    for (const thisPractice_judgement of practice_judgement) {
      snapshot = practice_judgement.getSnapshot();
      practice_judgementLoopScheduler.add(importConditions(snapshot));
      const instr_loopLoopScheduler = new Scheduler(psychoJS);
      practice_judgementLoopScheduler.add(instr_loopLoopBegin(instr_loopLoopScheduler, snapshot));
      practice_judgementLoopScheduler.add(instr_loopLoopScheduler);
      practice_judgementLoopScheduler.add(instr_loopLoopEnd);
      practice_judgementLoopScheduler.add(end_prac_judgeRoutineBegin(snapshot));
      practice_judgementLoopScheduler.add(end_prac_judgeRoutineEachFrame());
      practice_judgementLoopScheduler.add(end_prac_judgeRoutineEnd(snapshot));
      practice_judgementLoopScheduler.add(practice_judgementLoopEndIteration(practice_judgementLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var instr_loop;
function instr_loopLoopBegin(instr_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instr_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instr_loop'
    });
    psychoJS.experiment.addLoop(instr_loop); // add the loop to the experiment
    currentLoop = instr_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstr_loop of instr_loop) {
      snapshot = instr_loop.getSnapshot();
      instr_loopLoopScheduler.add(importConditions(snapshot));
      instr_loopLoopScheduler.add(instr_3_2RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_2RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_2RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_3RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_3RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_3RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_4RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_4RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_4RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_5RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_5RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_5RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_6RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_6RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_6RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_7RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_7RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_7RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_8RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_8RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_8RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_9RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_9RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_9RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_10RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_10RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_10RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_11RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_11RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_11RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_12RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_12RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_12RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_3_13RoutineBegin(snapshot));
      instr_loopLoopScheduler.add(instr_3_13RoutineEachFrame());
      instr_loopLoopScheduler.add(instr_3_13RoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_loopLoopEndIteration(instr_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instr_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instr_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instr_loopLoopEndIteration(scheduler, snapshot) {
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


var prac_block_loop;
function prac_block_loopLoopBegin(prac_block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'prac_block_loop'
    });
    psychoJS.experiment.addLoop(prac_block_loop); // add the loop to the experiment
    currentLoop = prac_block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_block_loop of prac_block_loop) {
      snapshot = prac_block_loop.getSnapshot();
      prac_block_loopLoopScheduler.add(importConditions(snapshot));
      prac_block_loopLoopScheduler.add(prac_restRoutineBegin(snapshot));
      prac_block_loopLoopScheduler.add(prac_restRoutineEachFrame());
      prac_block_loopLoopScheduler.add(prac_restRoutineEnd(snapshot));
      prac_block_loopLoopScheduler.add(prac_fixationRoutineBegin(snapshot));
      prac_block_loopLoopScheduler.add(prac_fixationRoutineEachFrame());
      prac_block_loopLoopScheduler.add(prac_fixationRoutineEnd(snapshot));
      const prac_trials_loopLoopScheduler = new Scheduler(psychoJS);
      prac_block_loopLoopScheduler.add(prac_trials_loopLoopBegin(prac_trials_loopLoopScheduler, snapshot));
      prac_block_loopLoopScheduler.add(prac_trials_loopLoopScheduler);
      prac_block_loopLoopScheduler.add(prac_trials_loopLoopEnd);
      prac_block_loopLoopScheduler.add(prac_block_fbRoutineBegin(snapshot));
      prac_block_loopLoopScheduler.add(prac_block_fbRoutineEachFrame());
      prac_block_loopLoopScheduler.add(prac_block_fbRoutineEnd(snapshot));
      prac_block_loopLoopScheduler.add(prac_block_loopLoopEndIteration(prac_block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var prac_trials_loop;
function prac_trials_loopLoopBegin(prac_trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials_loop_zm.xlsx',
      seed: undefined, name: 'prac_trials_loop'
    });
    psychoJS.experiment.addLoop(prac_trials_loop); // add the loop to the experiment
    currentLoop = prac_trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_trials_loop of prac_trials_loop) {
      snapshot = prac_trials_loop.getSnapshot();
      prac_trials_loopLoopScheduler.add(importConditions(snapshot));
      prac_trials_loopLoopScheduler.add(prac_expRoutineBegin(snapshot));
      prac_trials_loopLoopScheduler.add(prac_expRoutineEachFrame());
      prac_trials_loopLoopScheduler.add(prac_expRoutineEnd(snapshot));
      prac_trials_loopLoopScheduler.add(prac_trial_fbRoutineBegin(snapshot));
      prac_trials_loopLoopScheduler.add(prac_trial_fbRoutineEachFrame());
      prac_trials_loopLoopScheduler.add(prac_trial_fbRoutineEnd(snapshot));
      prac_trials_loopLoopScheduler.add(prac_trials_loopLoopEndIteration(prac_trials_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trials_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trials_loopLoopEndIteration(scheduler, snapshot) {
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


async function prac_block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_block_loopLoopEndIteration(scheduler, snapshot) {
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


var block_loop;
function block_loopLoopBegin(block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'block_loop'
    });
    psychoJS.experiment.addLoop(block_loop); // add the loop to the experiment
    currentLoop = block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock_loop of block_loop) {
      snapshot = block_loop.getSnapshot();
      block_loopLoopScheduler.add(importConditions(snapshot));
      block_loopLoopScheduler.add(fixationRoutineBegin(snapshot));
      block_loopLoopScheduler.add(fixationRoutineEachFrame());
      block_loopLoopScheduler.add(fixationRoutineEnd(snapshot));
      const trials_loopLoopScheduler = new Scheduler(psychoJS);
      block_loopLoopScheduler.add(trials_loopLoopBegin(trials_loopLoopScheduler, snapshot));
      block_loopLoopScheduler.add(trials_loopLoopScheduler);
      block_loopLoopScheduler.add(trials_loopLoopEnd);
      block_loopLoopScheduler.add(block_fbRoutineBegin(snapshot));
      block_loopLoopScheduler.add(block_fbRoutineEachFrame());
      block_loopLoopScheduler.add(block_fbRoutineEnd(snapshot));
      block_loopLoopScheduler.add(restRoutineBegin(snapshot));
      block_loopLoopScheduler.add(restRoutineEachFrame());
      block_loopLoopScheduler.add(restRoutineEnd(snapshot));
      block_loopLoopScheduler.add(block_loopLoopEndIteration(block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_loop;
function trials_loopLoopBegin(trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials_loop_zm.xlsx',
      seed: undefined, name: 'trials_loop'
    });
    psychoJS.experiment.addLoop(trials_loop); // add the loop to the experiment
    currentLoop = trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_loop of trials_loop) {
      snapshot = trials_loop.getSnapshot();
      trials_loopLoopScheduler.add(importConditions(snapshot));
      trials_loopLoopScheduler.add(expRoutineBegin(snapshot));
      trials_loopLoopScheduler.add(expRoutineEachFrame());
      trials_loopLoopScheduler.add(expRoutineEnd(snapshot));
      trials_loopLoopScheduler.add(trials_loopLoopEndIteration(trials_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_loopLoopEndIteration(scheduler, snapshot) {
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


async function block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function block_loopLoopEndIteration(scheduler, snapshot) {
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


var instr_3_2Components;
function instr_3_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_2' ---
    t = 0;
    instr_3_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_2.started', globalClock.getTime());
    instr_3_2_sound.secs=6;
    instr_3_2_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3_2Components = [];
    instr_3_2Components.push(text_9);
    instr_3_2Components.push(text);
    instr_3_2Components.push(instr_3_2_sound);
    
    for (const thisComponent of instr_3_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function instr_3_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_2' ---
    // get current time
    t = instr_3_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // start/stop instr_3_2_sound
    if (t >= 0.0 && instr_3_2_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_2_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_2_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_2_sound.play(); });  // screen flip
      instr_3_2_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instr_3_2_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= instr_3_2_sound.tStart + 0.5) {
        instr_3_2_sound.stop();  // stop the sound (if longer than duration)
        instr_3_2_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_2' ---
    for (const thisComponent of instr_3_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_2.stopped', globalClock.getTime());
    instr_3_2_sound.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var instr_3_3Components;
function instr_3_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_3' ---
    t = 0;
    instr_3_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_3.started', globalClock.getTime());
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    instr_3_3_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3_3Components = [];
    instr_3_3Components.push(text_2);
    instr_3_3Components.push(key_resp_2);
    instr_3_3Components.push(instr_3_3_sound);
    
    for (const thisComponent of instr_3_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_3' ---
    // get current time
    t = instr_3_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_3_sound
    if (t >= 0.0 && instr_3_3_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_3_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_3_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_3_sound.play(); });  // screen flip
      instr_3_3_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_3_sound.getDuration() + instr_3_3_sound.tStart)     && instr_3_3_sound.status === PsychoJS.Status.STARTED) {
      instr_3_3_sound.stop();  // stop the sound (if longer than duration)
      instr_3_3_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_3' ---
    for (const thisComponent of instr_3_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    instr_3_3_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_3_4Components;
function instr_3_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_4' ---
    t = 0;
    instr_3_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_4.started', globalClock.getTime());
    instr_3_4_sound.secs=6;
    instr_3_4_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3_4Components = [];
    instr_3_4Components.push(text_10);
    instr_3_4Components.push(text_3);
    instr_3_4Components.push(instr_3_4_sound);
    
    for (const thisComponent of instr_3_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_4' ---
    // get current time
    t = instr_3_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
    }
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // start/stop instr_3_4_sound
    if (t >= 0.0 && instr_3_4_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_4_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_4_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_4_sound.play(); });  // screen flip
      instr_3_4_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instr_3_4_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= instr_3_4_sound.tStart + 0.5) {
        instr_3_4_sound.stop();  // stop the sound (if longer than duration)
        instr_3_4_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_4' ---
    for (const thisComponent of instr_3_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_4.stopped', globalClock.getTime());
    instr_3_4_sound.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var instr_3_5Components;
function instr_3_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_5' ---
    t = 0;
    instr_3_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_5.started', globalClock.getTime());
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    instr_3_5_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3_5Components = [];
    instr_3_5Components.push(text_4);
    instr_3_5Components.push(key_resp_3);
    instr_3_5Components.push(instr_3_5_sound);
    
    for (const thisComponent of instr_3_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_5' ---
    // get current time
    t = instr_3_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_5_sound
    if (t >= 0.0 && instr_3_5_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_5_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_5_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_5_sound.play(); });  // screen flip
      instr_3_5_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_5_sound.getDuration() + instr_3_5_sound.tStart)     && instr_3_5_sound.status === PsychoJS.Status.STARTED) {
      instr_3_5_sound.stop();  // stop the sound (if longer than duration)
      instr_3_5_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_5' ---
    for (const thisComponent of instr_3_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    instr_3_5_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var instr_3_6Components;
function instr_3_6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_6' ---
    t = 0;
    instr_3_6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_6.started', globalClock.getTime());
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    instr_3_6_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3_6Components = [];
    instr_3_6Components.push(text_12);
    instr_3_6Components.push(text_5);
    instr_3_6Components.push(text_11);
    instr_3_6Components.push(key_resp_4);
    instr_3_6Components.push(instr_3_6_sound);
    
    for (const thisComponent of instr_3_6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_6' ---
    // get current time
    t = instr_3_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_6_sound
    if (t >= 0.0 && instr_3_6_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_6_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_6_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_6_sound.play(); });  // screen flip
      instr_3_6_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_6_sound.getDuration() + instr_3_6_sound.tStart)     && instr_3_6_sound.status === PsychoJS.Status.STARTED) {
      instr_3_6_sound.stop();  // stop the sound (if longer than duration)
      instr_3_6_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_6' ---
    for (const thisComponent of instr_3_6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    instr_3_6_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var instr_3_7Components;
function instr_3_7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_7' ---
    t = 0;
    instr_3_7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_7.started', globalClock.getTime());
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    instr_3_7_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3_7Components = [];
    instr_3_7Components.push(text_6);
    instr_3_7Components.push(text_7);
    instr_3_7Components.push(text_13);
    instr_3_7Components.push(text_8);
    instr_3_7Components.push(text_14);
    instr_3_7Components.push(key_resp_5);
    instr_3_7Components.push(instr_3_7_sound);
    
    for (const thisComponent of instr_3_7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_7' ---
    // get current time
    t = instr_3_7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_7_sound
    if (t >= 0.0 && instr_3_7_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_7_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_7_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_7_sound.play(); });  // screen flip
      instr_3_7_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_7_sound.getDuration() + instr_3_7_sound.tStart)     && instr_3_7_sound.status === PsychoJS.Status.STARTED) {
      instr_3_7_sound.stop();  // stop the sound (if longer than duration)
      instr_3_7_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_7' ---
    for (const thisComponent of instr_3_7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_7.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    instr_3_7_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var instr_3_8Components;
function instr_3_8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_8' ---
    t = 0;
    instr_3_8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_8.started', globalClock.getTime());
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    instr_3_8_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3_8Components = [];
    instr_3_8Components.push(text_15);
    instr_3_8Components.push(text_16);
    instr_3_8Components.push(text_17);
    instr_3_8Components.push(key_resp_6);
    instr_3_8Components.push(instr_3_8_sound);
    
    for (const thisComponent of instr_3_8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_8' ---
    // get current time
    t = instr_3_8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }
    
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_8_sound
    if (t >= 0.0 && instr_3_8_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_8_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_8_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_8_sound.play(); });  // screen flip
      instr_3_8_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_8_sound.getDuration() + instr_3_8_sound.tStart)     && instr_3_8_sound.status === PsychoJS.Status.STARTED) {
      instr_3_8_sound.stop();  // stop the sound (if longer than duration)
      instr_3_8_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_8' ---
    for (const thisComponent of instr_3_8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_8.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    instr_3_8_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_7_allKeys;
var instr_3_9Components;
function instr_3_9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_9' ---
    t = 0;
    instr_3_9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_9.started', globalClock.getTime());
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    instr_3_9_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3_9Components = [];
    instr_3_9Components.push(text_18);
    instr_3_9Components.push(text_19);
    instr_3_9Components.push(text_23);
    instr_3_9Components.push(text_20);
    instr_3_9Components.push(text_21);
    instr_3_9Components.push(text_22);
    instr_3_9Components.push(key_resp_7);
    instr_3_9Components.push(instr_3_9_sound);
    
    for (const thisComponent of instr_3_9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_9' ---
    // get current time
    t = instr_3_9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }
    
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }
    
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }
    
    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }
    
    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }
    
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_9_sound
    if (t >= 0.0 && instr_3_9_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_9_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_9_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_9_sound.play(); });  // screen flip
      instr_3_9_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_9_sound.getDuration() + instr_3_9_sound.tStart)     && instr_3_9_sound.status === PsychoJS.Status.STARTED) {
      instr_3_9_sound.stop();  // stop the sound (if longer than duration)
      instr_3_9_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_9' ---
    for (const thisComponent of instr_3_9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_9.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    instr_3_9_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var instr_3_10Components;
function instr_3_10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_10' ---
    t = 0;
    instr_3_10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_10.started', globalClock.getTime());
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    instr_3_8_sound_2.setVolume(1.0);
    // keep track of which components have finished
    instr_3_10Components = [];
    instr_3_10Components.push(text_24);
    instr_3_10Components.push(text_25);
    instr_3_10Components.push(text_26);
    instr_3_10Components.push(key_resp_8);
    instr_3_10Components.push(instr_3_8_sound_2);
    
    for (const thisComponent of instr_3_10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_10' ---
    // get current time
    t = instr_3_10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }
    
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }
    
    
    // *text_26* updates
    if (t >= 0.0 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_8_sound_2
    if (t >= 0.0 && instr_3_8_sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_8_sound_2.tStart = t;  // (not accounting for frame time here)
      instr_3_8_sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_8_sound_2.play(); });  // screen flip
      instr_3_8_sound_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_8_sound_2.getDuration() + instr_3_8_sound_2.tStart)     && instr_3_8_sound_2.status === PsychoJS.Status.STARTED) {
      instr_3_8_sound_2.stop();  // stop the sound (if longer than duration)
      instr_3_8_sound_2.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_10' ---
    for (const thisComponent of instr_3_10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_10.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    instr_3_8_sound_2.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_9_allKeys;
var instr_3_11Components;
function instr_3_11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_11' ---
    t = 0;
    instr_3_11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_11.started', globalClock.getTime());
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    instr_3_9_sound_2.setVolume(1.0);
    // keep track of which components have finished
    instr_3_11Components = [];
    instr_3_11Components.push(text_27);
    instr_3_11Components.push(text_28);
    instr_3_11Components.push(text_29);
    instr_3_11Components.push(text_30);
    instr_3_11Components.push(text_31);
    instr_3_11Components.push(text_41);
    instr_3_11Components.push(text_32);
    instr_3_11Components.push(key_resp_9);
    instr_3_11Components.push(instr_3_9_sound_2);
    
    for (const thisComponent of instr_3_11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_11' ---
    // get current time
    t = instr_3_11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_27* updates
    if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }
    
    
    // *text_28* updates
    if (t >= 0.0 && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
    }
    
    
    // *text_29* updates
    if (t >= 0.0 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }
    
    
    // *text_30* updates
    if (t >= 0.0 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      
      text_30.setAutoDraw(true);
    }
    
    
    // *text_31* updates
    if (t >= 0.0 && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }
    
    
    // *text_41* updates
    if (t >= 0.0 && text_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_41.tStart = t;  // (not accounting for frame time here)
      text_41.frameNStart = frameN;  // exact frame index
      
      text_41.setAutoDraw(true);
    }
    
    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_9_sound_2
    if (t >= 0.0 && instr_3_9_sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_9_sound_2.tStart = t;  // (not accounting for frame time here)
      instr_3_9_sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_9_sound_2.play(); });  // screen flip
      instr_3_9_sound_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_9_sound_2.getDuration() + instr_3_9_sound_2.tStart)     && instr_3_9_sound_2.status === PsychoJS.Status.STARTED) {
      instr_3_9_sound_2.stop();  // stop the sound (if longer than duration)
      instr_3_9_sound_2.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_11' ---
    for (const thisComponent of instr_3_11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_11.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    instr_3_9_sound_2.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_10_allKeys;
var instr_3_12Components;
function instr_3_12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_12' ---
    t = 0;
    instr_3_12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_12.started', globalClock.getTime());
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    instr_3_6_sound_2.setVolume(1.0);
    // keep track of which components have finished
    instr_3_12Components = [];
    instr_3_12Components.push(text_33);
    instr_3_12Components.push(text_34);
    instr_3_12Components.push(text_35);
    instr_3_12Components.push(key_resp_10);
    instr_3_12Components.push(instr_3_6_sound_2);
    
    for (const thisComponent of instr_3_12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_12' ---
    // get current time
    t = instr_3_12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_33* updates
    if (t >= 0.0 && text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_33.tStart = t;  // (not accounting for frame time here)
      text_33.frameNStart = frameN;  // exact frame index
      
      text_33.setAutoDraw(true);
    }
    
    
    // *text_34* updates
    if (t >= 0.0 && text_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_34.tStart = t;  // (not accounting for frame time here)
      text_34.frameNStart = frameN;  // exact frame index
      
      text_34.setAutoDraw(true);
    }
    
    
    // *text_35* updates
    if (t >= 0.0 && text_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_35.tStart = t;  // (not accounting for frame time here)
      text_35.frameNStart = frameN;  // exact frame index
      
      text_35.setAutoDraw(true);
    }
    
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_6_sound_2
    if (t >= 0.0 && instr_3_6_sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_6_sound_2.tStart = t;  // (not accounting for frame time here)
      instr_3_6_sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_6_sound_2.play(); });  // screen flip
      instr_3_6_sound_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_6_sound_2.getDuration() + instr_3_6_sound_2.tStart)     && instr_3_6_sound_2.status === PsychoJS.Status.STARTED) {
      instr_3_6_sound_2.stop();  // stop the sound (if longer than duration)
      instr_3_6_sound_2.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_12' ---
    for (const thisComponent of instr_3_12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_12.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    instr_3_6_sound_2.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_11_allKeys;
var instr_3_13Components;
function instr_3_13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3_13' ---
    t = 0;
    instr_3_13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3_13.started', globalClock.getTime());
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    instr_3_9_sound_3.setVolume(1.0);
    // keep track of which components have finished
    instr_3_13Components = [];
    instr_3_13Components.push(text_36);
    instr_3_13Components.push(text_37);
    instr_3_13Components.push(text_38);
    instr_3_13Components.push(text_39);
    instr_3_13Components.push(text_40);
    instr_3_13Components.push(text_42);
    instr_3_13Components.push(text_43);
    instr_3_13Components.push(text_44);
    instr_3_13Components.push(key_resp_11);
    instr_3_13Components.push(instr_3_9_sound_3);
    
    for (const thisComponent of instr_3_13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3_13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3_13' ---
    // get current time
    t = instr_3_13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_36* updates
    if (t >= 0.0 && text_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_36.tStart = t;  // (not accounting for frame time here)
      text_36.frameNStart = frameN;  // exact frame index
      
      text_36.setAutoDraw(true);
    }
    
    
    // *text_37* updates
    if (t >= 0.0 && text_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_37.tStart = t;  // (not accounting for frame time here)
      text_37.frameNStart = frameN;  // exact frame index
      
      text_37.setAutoDraw(true);
    }
    
    
    // *text_38* updates
    if (t >= 0.0 && text_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_38.tStart = t;  // (not accounting for frame time here)
      text_38.frameNStart = frameN;  // exact frame index
      
      text_38.setAutoDraw(true);
    }
    
    
    // *text_39* updates
    if (t >= 0.0 && text_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_39.tStart = t;  // (not accounting for frame time here)
      text_39.frameNStart = frameN;  // exact frame index
      
      text_39.setAutoDraw(true);
    }
    
    
    // *text_40* updates
    if (t >= 0.0 && text_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_40.tStart = t;  // (not accounting for frame time here)
      text_40.frameNStart = frameN;  // exact frame index
      
      text_40.setAutoDraw(true);
    }
    
    
    // *text_42* updates
    if (t >= 0.0 && text_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_42.tStart = t;  // (not accounting for frame time here)
      text_42.frameNStart = frameN;  // exact frame index
      
      text_42.setAutoDraw(true);
    }
    
    
    // *text_43* updates
    if (t >= 0.0 && text_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_43.tStart = t;  // (not accounting for frame time here)
      text_43.frameNStart = frameN;  // exact frame index
      
      text_43.setAutoDraw(true);
    }
    
    
    // *text_44* updates
    if (t >= 0.0 && text_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_44.tStart = t;  // (not accounting for frame time here)
      text_44.frameNStart = frameN;  // exact frame index
      
      text_44.setAutoDraw(true);
    }
    
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }
    
    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_3_9_sound_3
    if (t >= 0.0 && instr_3_9_sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_9_sound_3.tStart = t;  // (not accounting for frame time here)
      instr_3_9_sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_9_sound_3.play(); });  // screen flip
      instr_3_9_sound_3.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_3_9_sound_3.getDuration() + instr_3_9_sound_3.tStart)     && instr_3_9_sound_3.status === PsychoJS.Status.STARTED) {
      instr_3_9_sound_3.stop();  // stop the sound (if longer than duration)
      instr_3_9_sound_3.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3_13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3_13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_13' ---
    for (const thisComponent of instr_3_13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3_13.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    instr_3_9_sound_3.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_3_13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_into_prac_allKeys;
var end_prac_judgeComponents;
function end_prac_judgeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_prac_judge' ---
    t = 0;
    end_prac_judgeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_prac_judge.started', globalClock.getTime());
    key_into_prac.keys = undefined;
    key_into_prac.rt = undefined;
    _key_into_prac_allKeys = [];
    // keep track of which components have finished
    end_prac_judgeComponents = [];
    end_prac_judgeComponents.push(into_prac);
    end_prac_judgeComponents.push(key_into_prac);
    
    for (const thisComponent of end_prac_judgeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_prac_judgeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_prac_judge' ---
    // get current time
    t = end_prac_judgeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *into_prac* updates
    if (t >= 0.0 && into_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      into_prac.tStart = t;  // (not accounting for frame time here)
      into_prac.frameNStart = frameN;  // exact frame index
      
      into_prac.setAutoDraw(true);
    }
    
    
    // *key_into_prac* updates
    if (t >= 0.0 && key_into_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_into_prac.tStart = t;  // (not accounting for frame time here)
      key_into_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_into_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_into_prac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_into_prac.clearEvents(); });
    }
    
    if (key_into_prac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_into_prac.getKeys({keyList: ['1', '4'], waitRelease: false});
      _key_into_prac_allKeys = _key_into_prac_allKeys.concat(theseKeys);
      if (_key_into_prac_allKeys.length > 0) {
        key_into_prac.keys = _key_into_prac_allKeys[_key_into_prac_allKeys.length - 1].name;  // just the last key pressed
        key_into_prac.rt = _key_into_prac_allKeys[_key_into_prac_allKeys.length - 1].rt;
        key_into_prac.duration = _key_into_prac_allKeys[_key_into_prac_allKeys.length - 1].duration;
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
    for (const thisComponent of end_prac_judgeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_prac_judgeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_prac_judge' ---
    for (const thisComponent of end_prac_judgeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_prac_judge.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_8
    if ((key_into_prac.keys === "4")) {
        practice_judgement.finished = true;
    } else {
        practice_judgement.finished = false;
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_into_prac.corr, level);
    }
    psychoJS.experiment.addData('key_into_prac.keys', key_into_prac.keys);
    if (typeof key_into_prac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_into_prac.rt', key_into_prac.rt);
        psychoJS.experiment.addData('key_into_prac.duration', key_into_prac.duration);
        routineTimer.reset();
        }
    
    key_into_prac.stop();
    // the Routine "end_prac_judge" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_key_resp_4_allKeys;
var instr_4Components;
function instr_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_4' ---
    t = 0;
    instr_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_4.started', globalClock.getTime());
    instr_key_resp_4.keys = undefined;
    instr_key_resp_4.rt = undefined;
    _instr_key_resp_4_allKeys = [];
    instr_4_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_4Components = [];
    instr_4Components.push(welpage_4);
    instr_4Components.push(instr_key_resp_4);
    instr_4Components.push(instr_4_sound);
    
    for (const thisComponent of instr_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_4' ---
    // get current time
    t = instr_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welpage_4* updates
    if (t >= 0.0 && welpage_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_4.tStart = t;  // (not accounting for frame time here)
      welpage_4.frameNStart = frameN;  // exact frame index
      
      welpage_4.setAutoDraw(true);
    }
    
    
    // *instr_key_resp_4* updates
    if (t >= 0.0 && instr_key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp_4.tStart = t;  // (not accounting for frame time here)
      instr_key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_4.clearEvents(); });
    }
    
    if (instr_key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_4_allKeys = _instr_key_resp_4_allKeys.concat(theseKeys);
      if (_instr_key_resp_4_allKeys.length > 0) {
        instr_key_resp_4.keys = _instr_key_resp_4_allKeys[_instr_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp_4.rt = _instr_key_resp_4_allKeys[_instr_key_resp_4_allKeys.length - 1].rt;
        instr_key_resp_4.duration = _instr_key_resp_4_allKeys[_instr_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_4_sound
    if (t >= 0.0 && instr_4_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_4_sound.tStart = t;  // (not accounting for frame time here)
      instr_4_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_4_sound.play(); });  // screen flip
      instr_4_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_4_sound.getDuration() + instr_4_sound.tStart)     && instr_4_sound.status === PsychoJS.Status.STARTED) {
      instr_4_sound.stop();  // stop the sound (if longer than duration)
      instr_4_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_4' ---
    for (const thisComponent of instr_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('instr_key_resp_4.keys', instr_key_resp_4.keys);
    if (typeof instr_key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp_4.rt', instr_key_resp_4.rt);
        psychoJS.experiment.addData('instr_key_resp_4.duration', instr_key_resp_4.duration);
        routineTimer.reset();
        }
    
    instr_key_resp_4.stop();
    instr_4_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_key_resp_8_allKeys;
var instr_4_3Components;
function instr_4_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_4_3' ---
    t = 0;
    instr_4_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_4_3.started', globalClock.getTime());
    instr_key_resp_8.keys = undefined;
    instr_key_resp_8.rt = undefined;
    _instr_key_resp_8_allKeys = [];
    instr_4_sound_2.setVolume(1.0);
    // keep track of which components have finished
    instr_4_3Components = [];
    instr_4_3Components.push(welpage_7);
    instr_4_3Components.push(instr_key_resp_8);
    instr_4_3Components.push(instr_4_sound_2);
    
    for (const thisComponent of instr_4_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_4_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_4_3' ---
    // get current time
    t = instr_4_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welpage_7* updates
    if (t >= 0.0 && welpage_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_7.tStart = t;  // (not accounting for frame time here)
      welpage_7.frameNStart = frameN;  // exact frame index
      
      welpage_7.setAutoDraw(true);
    }
    
    
    // *instr_key_resp_8* updates
    if (t >= 0.0 && instr_key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp_8.tStart = t;  // (not accounting for frame time here)
      instr_key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_8.clearEvents(); });
    }
    
    if (instr_key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_8_allKeys = _instr_key_resp_8_allKeys.concat(theseKeys);
      if (_instr_key_resp_8_allKeys.length > 0) {
        instr_key_resp_8.keys = _instr_key_resp_8_allKeys[_instr_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp_8.rt = _instr_key_resp_8_allKeys[_instr_key_resp_8_allKeys.length - 1].rt;
        instr_key_resp_8.duration = _instr_key_resp_8_allKeys[_instr_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_4_sound_2
    if (t >= 0.0 && instr_4_sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_4_sound_2.tStart = t;  // (not accounting for frame time here)
      instr_4_sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_4_sound_2.play(); });  // screen flip
      instr_4_sound_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_4_sound_2.getDuration() + instr_4_sound_2.tStart)     && instr_4_sound_2.status === PsychoJS.Status.STARTED) {
      instr_4_sound_2.stop();  // stop the sound (if longer than duration)
      instr_4_sound_2.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_4_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_4_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_4_3' ---
    for (const thisComponent of instr_4_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_4_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('instr_key_resp_8.keys', instr_key_resp_8.keys);
    if (typeof instr_key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp_8.rt', instr_key_resp_8.rt);
        psychoJS.experiment.addData('instr_key_resp_8.duration', instr_key_resp_8.duration);
        routineTimer.reset();
        }
    
    instr_key_resp_8.stop();
    instr_4_sound_2.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_4_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_key_resp_6_allKeys;
var instr_4_1Components;
function instr_4_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_4_1' ---
    t = 0;
    instr_4_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_4_1.started', globalClock.getTime());
    instr_key_resp_6.keys = undefined;
    instr_key_resp_6.rt = undefined;
    _instr_key_resp_6_allKeys = [];
    instr_4_1_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_4_1Components = [];
    instr_4_1Components.push(welpage_5);
    instr_4_1Components.push(instr_key_resp_6);
    instr_4_1Components.push(instr_4_1_sound);
    
    for (const thisComponent of instr_4_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_4_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_4_1' ---
    // get current time
    t = instr_4_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welpage_5* updates
    if (t >= 0.0 && welpage_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_5.tStart = t;  // (not accounting for frame time here)
      welpage_5.frameNStart = frameN;  // exact frame index
      
      welpage_5.setAutoDraw(true);
    }
    
    
    // *instr_key_resp_6* updates
    if (t >= 0.0 && instr_key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp_6.tStart = t;  // (not accounting for frame time here)
      instr_key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_6.clearEvents(); });
    }
    
    if (instr_key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_6_allKeys = _instr_key_resp_6_allKeys.concat(theseKeys);
      if (_instr_key_resp_6_allKeys.length > 0) {
        instr_key_resp_6.keys = _instr_key_resp_6_allKeys[_instr_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp_6.rt = _instr_key_resp_6_allKeys[_instr_key_resp_6_allKeys.length - 1].rt;
        instr_key_resp_6.duration = _instr_key_resp_6_allKeys[_instr_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_4_1_sound
    if (t >= 0.0 && instr_4_1_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_4_1_sound.tStart = t;  // (not accounting for frame time here)
      instr_4_1_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_4_1_sound.play(); });  // screen flip
      instr_4_1_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_4_1_sound.getDuration() + instr_4_1_sound.tStart)     && instr_4_1_sound.status === PsychoJS.Status.STARTED) {
      instr_4_1_sound.stop();  // stop the sound (if longer than duration)
      instr_4_1_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_4_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_4_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_4_1' ---
    for (const thisComponent of instr_4_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_4_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('instr_key_resp_6.keys', instr_key_resp_6.keys);
    if (typeof instr_key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp_6.rt', instr_key_resp_6.rt);
        psychoJS.experiment.addData('instr_key_resp_6.duration', instr_key_resp_6.duration);
        routineTimer.reset();
        }
    
    instr_key_resp_6.stop();
    instr_4_1_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_4_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_key_resp_7_allKeys;
var instr_4_2Components;
function instr_4_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_4_2' ---
    t = 0;
    instr_4_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_4_2.started', globalClock.getTime());
    instr_key_resp_7.keys = undefined;
    instr_key_resp_7.rt = undefined;
    _instr_key_resp_7_allKeys = [];
    instr_4_2_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_4_2Components = [];
    instr_4_2Components.push(welpage_6);
    instr_4_2Components.push(instr_key_resp_7);
    instr_4_2Components.push(instr_4_2_sound);
    
    for (const thisComponent of instr_4_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_4_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_4_2' ---
    // get current time
    t = instr_4_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welpage_6* updates
    if (t >= 0.0 && welpage_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_6.tStart = t;  // (not accounting for frame time here)
      welpage_6.frameNStart = frameN;  // exact frame index
      
      welpage_6.setAutoDraw(true);
    }
    
    
    // *instr_key_resp_7* updates
    if (t >= 0.0 && instr_key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp_7.tStart = t;  // (not accounting for frame time here)
      instr_key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_7.clearEvents(); });
    }
    
    if (instr_key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_7_allKeys = _instr_key_resp_7_allKeys.concat(theseKeys);
      if (_instr_key_resp_7_allKeys.length > 0) {
        instr_key_resp_7.keys = _instr_key_resp_7_allKeys[_instr_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp_7.rt = _instr_key_resp_7_allKeys[_instr_key_resp_7_allKeys.length - 1].rt;
        instr_key_resp_7.duration = _instr_key_resp_7_allKeys[_instr_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_4_2_sound
    if (t >= 0.0 && instr_4_2_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_4_2_sound.tStart = t;  // (not accounting for frame time here)
      instr_4_2_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_4_2_sound.play(); });  // screen flip
      instr_4_2_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_4_2_sound.getDuration() + instr_4_2_sound.tStart)     && instr_4_2_sound.status === PsychoJS.Status.STARTED) {
      instr_4_2_sound.stop();  // stop the sound (if longer than duration)
      instr_4_2_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_4_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_4_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_4_2' ---
    for (const thisComponent of instr_4_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_4_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('instr_key_resp_7.keys', instr_key_resp_7.keys);
    if (typeof instr_key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp_7.rt', instr_key_resp_7.rt);
        psychoJS.experiment.addData('instr_key_resp_7.duration', instr_key_resp_7.duration);
        routineTimer.reset();
        }
    
    instr_key_resp_7.stop();
    instr_4_2_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_4_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_rest_audio;
var _prac_rest_key_resp_allKeys;
var prac_restComponents;
function prac_restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_rest' ---
    t = 0;
    prac_restClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_rest.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    if ((prac_block_loop.thisN === 0)) {
        prac_rest_text = "\u5982\u679c\u60a8\u51c6\u5907\u597d\u4e86\uff0c\u8bf7\u6309\u7a7a\u683c\u952e\u5f00\u59cb\u7ec3\u4e60\u3002";
        prac_rest_audio = "audio/prac_rest_instr_1.wav";
    } else {
        prac_rest_text = "\u7ec3\u4e60\u5b9e\u9a8c\u7684\u6b63\u786e\u7387\u9700\u8fbe\u523060%\u624d\u80fd\u8fdb\u5165\u6b63\u5f0f\u5b9e\u9a8c\uff0c\n\n\u6ca1\u5173\u7cfb\uff0c\u518d\u6765\u7ec3\u4e60\u4e00\u6b21\u5427\uff01\n\n\n\u8bf7\u6309\u7a7a\u683c\u952e\u5f00\u59cb\u7ec3\u4e60\u3002";
        prac_rest_audio = "audio/prac_rest_instr_2.wav";
    }
    
    
    prac_rest_instr.setText(prac_rest_text);
    prac_rest_key_resp.keys = undefined;
    prac_rest_key_resp.rt = undefined;
    _prac_rest_key_resp_allKeys = [];
    prac_rest_sound.setValue(prac_rest_audio);
    prac_rest_sound.setVolume(1.0);
    // keep track of which components have finished
    prac_restComponents = [];
    prac_restComponents.push(prac_rest_instr);
    prac_restComponents.push(prac_rest_key_resp);
    prac_restComponents.push(prac_rest_sound);
    
    for (const thisComponent of prac_restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_rest' ---
    // get current time
    t = prac_restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_rest_instr* updates
    if (t >= 0.0 && prac_rest_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_rest_instr.tStart = t;  // (not accounting for frame time here)
      prac_rest_instr.frameNStart = frameN;  // exact frame index
      
      prac_rest_instr.setAutoDraw(true);
    }
    
    
    // *prac_rest_key_resp* updates
    if (t >= 0.0 && prac_rest_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_rest_key_resp.tStart = t;  // (not accounting for frame time here)
      prac_rest_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_rest_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_rest_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_rest_key_resp.clearEvents(); });
    }
    
    if (prac_rest_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_rest_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _prac_rest_key_resp_allKeys = _prac_rest_key_resp_allKeys.concat(theseKeys);
      if (_prac_rest_key_resp_allKeys.length > 0) {
        prac_rest_key_resp.keys = _prac_rest_key_resp_allKeys[_prac_rest_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_rest_key_resp.rt = _prac_rest_key_resp_allKeys[_prac_rest_key_resp_allKeys.length - 1].rt;
        prac_rest_key_resp.duration = _prac_rest_key_resp_allKeys[_prac_rest_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop prac_rest_sound
    if (t >= 0.0 && prac_rest_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_rest_sound.tStart = t;  // (not accounting for frame time here)
      prac_rest_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ prac_rest_sound.play(); });  // screen flip
      prac_rest_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (prac_rest_sound.getDuration() + prac_rest_sound.tStart)     && prac_rest_sound.status === PsychoJS.Status.STARTED) {
      prac_rest_sound.stop();  // stop the sound (if longer than duration)
      prac_rest_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of prac_restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_rest' ---
    for (const thisComponent of prac_restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_rest.stopped', globalClock.getTime());
    prac_rest_audio = new sound.Sound({
          win: psychoJS.window,
          value: 'A',
          secs: 1.5,
          });
    prac_rest_audio.setVolume(1.0);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_rest_key_resp.corr, level);
    }
    psychoJS.experiment.addData('prac_rest_key_resp.keys', prac_rest_key_resp.keys);
    if (typeof prac_rest_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_rest_key_resp.rt', prac_rest_key_resp.rt);
        psychoJS.experiment.addData('prac_rest_key_resp.duration', prac_rest_key_resp.duration);
        routineTimer.reset();
        }
    
    prac_rest_key_resp.stop();
    prac_rest_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "prac_rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_fixationComponents;
function prac_fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_fixation' ---
    t = 0;
    prac_fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_fixation.started', globalClock.getTime());
    // keep track of which components have finished
    prac_fixationComponents = [];
    prac_fixationComponents.push(prac_fix);
    
    for (const thisComponent of prac_fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_fixation' ---
    // get current time
    t = prac_fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_fix* updates
    if (t >= 0 && prac_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_fix.tStart = t;  // (not accounting for frame time here)
      prac_fix.frameNStart = frameN;  // exact frame index
      
      prac_fix.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    for (const thisComponent of prac_fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_fixation' ---
    for (const thisComponent of prac_fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_fixation.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var numlist;
var _prac_key_resp_allKeys;
var prac_expComponents;
function prac_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_exp' ---
    t = 0;
    prac_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.260000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_exp.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    numlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    util.shuffle(numlist);
    num = numlist.pop();
    count = (count + 1);
    if ((count > 2)) {
        if ((cond === "same")) {
            num = tempnum[1];
            tempnum.pop(1);
        }
        if ((cond === "different")) {
            while ((num === tempnum[1])) {
                num = numlist.pop();
            }
            tempnum.pop(1);
        }
    }
    
    prac_stimu.setText(num);
    prac_key_resp.keys = undefined;
    prac_key_resp.rt = undefined;
    _prac_key_resp_allKeys = [];
    // keep track of which components have finished
    prac_expComponents = [];
    prac_expComponents.push(prac_stimu);
    prac_expComponents.push(prac_blank);
    prac_expComponents.push(prac_key_resp);
    
    for (const thisComponent of prac_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_exp' ---
    // get current time
    t = prac_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_stimu* updates
    if (t >= 0 && prac_stimu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_stimu.tStart = t;  // (not accounting for frame time here)
      prac_stimu.frameNStart = frameN;  // exact frame index
      
      prac_stimu.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.76 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_stimu.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_stimu.setAutoDraw(false);
    }
    
    // *prac_blank* updates
    if (t >= 0.76 && prac_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_blank.tStart = t;  // (not accounting for frame time here)
      prac_blank.frameNStart = frameN;  // exact frame index
      
      prac_blank.setAutoDraw(true);
    }
    
    frameRemains = 0.76 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_blank.setAutoDraw(false);
    }
    
    // *prac_key_resp* updates
    if (t >= 0 && prac_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_key_resp.tStart = t;  // (not accounting for frame time here)
      prac_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_key_resp.clearEvents(); });
    }
    
    frameRemains = 0 + 2.26 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (prac_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_key_resp.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _prac_key_resp_allKeys = _prac_key_resp_allKeys.concat(theseKeys);
      if (_prac_key_resp_allKeys.length > 0) {
        prac_key_resp.keys = _prac_key_resp_allKeys[_prac_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_key_resp.rt = _prac_key_resp_allKeys[_prac_key_resp_allKeys.length - 1].rt;
        prac_key_resp.duration = _prac_key_resp_allKeys[_prac_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (prac_key_resp.keys == correctAns) {
            prac_key_resp.corr = 1;
        } else {
            prac_key_resp.corr = 0;
        }
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
    for (const thisComponent of prac_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var prac_feedb_audio;
function prac_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_exp' ---
    for (const thisComponent of prac_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_exp.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    if ((count <= 2)) {
        prac_feedb_audio = "audio/noresp.wav";
    }
    if ((count > 2)) {
        if ((! prac_key_resp.keys)) {
            prac_feedb = "\u592a\u6162!";
            prac_feedb_audio = "audio/tooslow.wav";
            prac_key_resp.corr = 0;
        } else {
            if ((prac_key_resp.corr === 1)) {
                prac_feedb = "\u6b63\u786e!";
                prac_feedb_audio = "audio/correct.wav";
                exp_rt.splice(0, 0, prac_key_resp.rt);
            } else {
                prac_feedb = "\u9519\u8bef!";
                prac_feedb_audio = "audio/wrong.wav";
            }
        }
        exp_corr.splice(0, 0, prac_key_resp.corr);
    }
    tempnum.splice(0, 0, num);
    psychoJS.experiment.addData("stimuli", num);
    psychoJS.experiment.addData("exp_corr", exp_corr);
    psychoJS.experiment.addData("prac_feedb_text", prac_feedb);
    
    prac_feedb_sound = new sound.Sound({
        win: psychoJS.window,
        value: 'A',
        secs: 0.65,
        });
    prac_feedb_sound.setVolume(1.0)
    // was no response the correct answer?!
    if (prac_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correctAns)) {
         prac_key_resp.corr = 1;  // correct non-response
      } else {
         prac_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_key_resp.corr, level);
    }
    psychoJS.experiment.addData('prac_key_resp.keys', prac_key_resp.keys);
    psychoJS.experiment.addData('prac_key_resp.corr', prac_key_resp.corr);
    if (typeof prac_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_key_resp.rt', prac_key_resp.rt);
        psychoJS.experiment.addData('prac_key_resp.duration', prac_key_resp.duration);
        }
    
    prac_key_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_trial_fbComponents;
function prac_trial_fbRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_trial_fb' ---
    t = 0;
    prac_trial_fbClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.650000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_trial_fb.started', globalClock.getTime());
    prac_feedb_text.setText(prac_feedb);
    prac_feedb_sound.setValue(prac_feedb_audio);
    prac_feedb_sound.secs=0.65;
    prac_feedb_sound.setVolume(1.0);
    // keep track of which components have finished
    prac_trial_fbComponents = [];
    prac_trial_fbComponents.push(prac_feedb_text);
    prac_trial_fbComponents.push(prac_feedb_sound);
    
    for (const thisComponent of prac_trial_fbComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_trial_fbRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_trial_fb' ---
    // get current time
    t = prac_trial_fbClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_feedb_text* updates
    if (t >= 0.0 && prac_feedb_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_feedb_text.tStart = t;  // (not accounting for frame time here)
      prac_feedb_text.frameNStart = frameN;  // exact frame index
      
      prac_feedb_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.65 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_feedb_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_feedb_text.setAutoDraw(false);
    }
    // start/stop prac_feedb_sound
    if (t >= 0.0 && prac_feedb_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_feedb_sound.tStart = t;  // (not accounting for frame time here)
      prac_feedb_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ prac_feedb_sound.play(); });  // screen flip
      prac_feedb_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 0.65 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_feedb_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= prac_feedb_sound.tStart + 0.5) {
        prac_feedb_sound.stop();  // stop the sound (if longer than duration)
        prac_feedb_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of prac_trial_fbComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_trial_fbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_trial_fb' ---
    for (const thisComponent of prac_trial_fbComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_trial_fb.stopped', globalClock.getTime());
    prac_feedb_sound.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _prac_block_fb_key_resp_allKeys;
var prac_block_fbComponents;
function prac_block_fbRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_block_fb' ---
    t = 0;
    prac_block_fbClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_block_fb.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_5
    exp_acc = (exp_corr.reduce((a, b) => a + b, 0) / exp_corr.length) * 100;
    
    if (exp_rt.length == 0) {
        block_feedb = '您的正确率为0。\n请确保明白实验规则再继续实验。\n\n\n请按空格键继续。';
    } else {
        exp_meanRT = exp_rt.reduce((a, b) => a + b, 0) / exp_rt.length;
        block_feedb = `您的正确率为${exp_acc.toFixed(2)}%\n您的平均反应时为${exp_meanRT.toFixed(2)}秒\n\n\n请按空格键继续。`;
    }
    prac_block_feedb_text.setText(block_feedb);
    prac_block_fb_key_resp.keys = undefined;
    prac_block_fb_key_resp.rt = undefined;
    _prac_block_fb_key_resp_allKeys = [];
    // keep track of which components have finished
    prac_block_fbComponents = [];
    prac_block_fbComponents.push(prac_block_feedb_text);
    prac_block_fbComponents.push(prac_block_fb_key_resp);
    
    for (const thisComponent of prac_block_fbComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_block_fbRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_block_fb' ---
    // get current time
    t = prac_block_fbClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_block_feedb_text* updates
    if (t >= 0.0 && prac_block_feedb_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_block_feedb_text.tStart = t;  // (not accounting for frame time here)
      prac_block_feedb_text.frameNStart = frameN;  // exact frame index
      
      prac_block_feedb_text.setAutoDraw(true);
    }
    
    
    // *prac_block_fb_key_resp* updates
    if (t >= 0.0 && prac_block_fb_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_block_fb_key_resp.tStart = t;  // (not accounting for frame time here)
      prac_block_fb_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_block_fb_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_block_fb_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_block_fb_key_resp.clearEvents(); });
    }
    
    if (prac_block_fb_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_block_fb_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _prac_block_fb_key_resp_allKeys = _prac_block_fb_key_resp_allKeys.concat(theseKeys);
      if (_prac_block_fb_key_resp_allKeys.length > 0) {
        prac_block_fb_key_resp.keys = _prac_block_fb_key_resp_allKeys[_prac_block_fb_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_block_fb_key_resp.rt = _prac_block_fb_key_resp_allKeys[_prac_block_fb_key_resp_allKeys.length - 1].rt;
        prac_block_fb_key_resp.duration = _prac_block_fb_key_resp_allKeys[_prac_block_fb_key_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of prac_block_fbComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_block_fbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_block_fb' ---
    for (const thisComponent of prac_block_fbComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_block_fb.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_5
    count = 0;
    exp_corr = [];
    exp_rt = [];
    prac_feedb = "";
    if ((exp_acc >= 60)) {
        prac_block_loop.finished = true;
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_block_fb_key_resp.corr, level);
    }
    psychoJS.experiment.addData('prac_block_fb_key_resp.keys', prac_block_fb_key_resp.keys);
    if (typeof prac_block_fb_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_block_fb_key_resp.rt', prac_block_fb_key_resp.rt);
        psychoJS.experiment.addData('prac_block_fb_key_resp.duration', prac_block_fb_key_resp.duration);
        routineTimer.reset();
        }
    
    prac_block_fb_key_resp.stop();
    // the Routine "prac_block_fb" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_key_resp_5_allKeys;
var instr_5Components;
function instr_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_5' ---
    t = 0;
    instr_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_5.started', globalClock.getTime());
    instr_key_resp_5.keys = undefined;
    instr_key_resp_5.rt = undefined;
    _instr_key_resp_5_allKeys = [];
    instr_sound_5.setVolume(1.0);
    // keep track of which components have finished
    instr_5Components = [];
    instr_5Components.push(welpage_exp);
    instr_5Components.push(instr_key_resp_5);
    instr_5Components.push(instr_sound_5);
    
    for (const thisComponent of instr_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_5' ---
    // get current time
    t = instr_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welpage_exp* updates
    if (t >= 0.0 && welpage_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welpage_exp.tStart = t;  // (not accounting for frame time here)
      welpage_exp.frameNStart = frameN;  // exact frame index
      
      welpage_exp.setAutoDraw(true);
    }
    
    
    // *instr_key_resp_5* updates
    if (t >= 0.0 && instr_key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp_5.tStart = t;  // (not accounting for frame time here)
      instr_key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_5.clearEvents(); });
    }
    
    if (instr_key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_5_allKeys = _instr_key_resp_5_allKeys.concat(theseKeys);
      if (_instr_key_resp_5_allKeys.length > 0) {
        instr_key_resp_5.keys = _instr_key_resp_5_allKeys[_instr_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp_5.rt = _instr_key_resp_5_allKeys[_instr_key_resp_5_allKeys.length - 1].rt;
        instr_key_resp_5.duration = _instr_key_resp_5_allKeys[_instr_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_sound_5
    if (t >= 0.0 && instr_sound_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_sound_5.tStart = t;  // (not accounting for frame time here)
      instr_sound_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_sound_5.play(); });  // screen flip
      instr_sound_5.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_sound_5.getDuration() + instr_sound_5.tStart)     && instr_sound_5.status === PsychoJS.Status.STARTED) {
      instr_sound_5.stop();  // stop the sound (if longer than duration)
      instr_sound_5.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_5' ---
    for (const thisComponent of instr_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('instr_key_resp_5.keys', instr_key_resp_5.keys);
    if (typeof instr_key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_resp_5.rt', instr_key_resp_5.rt);
        psychoJS.experiment.addData('instr_key_resp_5.duration', instr_key_resp_5.duration);
        routineTimer.reset();
        }
    
    instr_key_resp_5.stop();
    instr_sound_5.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instr_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fix);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var expComponents;
function expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp' ---
    t = 0;
    expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.260000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    numlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    util.shuffle(numlist);
    num = numlist.pop();
    count = (count + 1);
    if ((count > 2)) {
        if ((cond === "same")) {
            num = tempnum[1];
            tempnum.pop(1);
        }
        if ((cond === "different")) {
            while ((num === tempnum[1])) {
                num = numlist.pop();
            }
            tempnum.pop(1);
        }
    }
    
    stimu.setText(num);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    expComponents = [];
    expComponents.push(stimu);
    expComponents.push(blank);
    expComponents.push(key_resp);
    
    for (const thisComponent of expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp' ---
    // get current time
    t = expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimu* updates
    if (t >= 0 && stimu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimu.tStart = t;  // (not accounting for frame time here)
      stimu.frameNStart = frameN;  // exact frame index
      
      stimu.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.76 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimu.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimu.setAutoDraw(false);
    }
    
    // *blank* updates
    if (t >= 0.76 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }
    
    frameRemains = 0.76 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    frameRemains = 0 + 2.26 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == correctAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
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
    for (const thisComponent of expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp' ---
    for (const thisComponent of expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    if ((count > 2)) {
        if ((! key_resp.keys)) {
            prac_feedb = "\u592a\u6162!";
            key_resp.corr = 0;
        } else {
            if ((key_resp.corr === 1)) {
                prac_feedb = "\u6b63\u786e!";
                prac_feedbColor = "green";
                exp_rt.splice(0, 0, key_resp.rt);
            } else {
                prac_feedb = "\u9519\u8bef!";
                prac_feedbColor = "red";
            }
        }
        exp_corr.splice(0, 0, key_resp.corr);
    }
    tempnum.splice(0, 0, num);
    psychoJS.experiment.addData("stimuli", num);
    psychoJS.experiment.addData("exp_corr", exp_corr);
    
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correctAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        }
    
    key_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _block_fb_key_resp_allKeys;
var block_fbComponents;
function block_fbRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_fb' ---
    t = 0;
    block_fbClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('block_fb.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_3
    exp_acc = (exp_corr.reduce((a, b) => a + b, 0) / exp_corr.length) * 100;
    
    if (exp_rt.length == 0) {
        block_feedb = '您的正确率为0。\n请确保明白实验规则再继续实验。\n\n\n请按空格键继续。';
    } else {
        exp_meanRT = exp_rt.reduce((a, b) => a + b, 0) / exp_rt.length;
        block_feedb = `您的正确率为${exp_acc.toFixed(2)}%\n您的平均反应时为${exp_meanRT.toFixed(2)}秒\n\n\n请按空格键继续。`;
    }
    block_feedb_text.setText(block_feedb);
    block_fb_key_resp.keys = undefined;
    block_fb_key_resp.rt = undefined;
    _block_fb_key_resp_allKeys = [];
    // keep track of which components have finished
    block_fbComponents = [];
    block_fbComponents.push(block_feedb_text);
    block_fbComponents.push(block_fb_key_resp);
    
    for (const thisComponent of block_fbComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_fbRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_fb' ---
    // get current time
    t = block_fbClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_feedb_text* updates
    if (t >= 0.0 && block_feedb_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_feedb_text.tStart = t;  // (not accounting for frame time here)
      block_feedb_text.frameNStart = frameN;  // exact frame index
      
      block_feedb_text.setAutoDraw(true);
    }
    
    
    // *block_fb_key_resp* updates
    if (t >= 0.0 && block_fb_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_fb_key_resp.tStart = t;  // (not accounting for frame time here)
      block_fb_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { block_fb_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { block_fb_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { block_fb_key_resp.clearEvents(); });
    }
    
    if (block_fb_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = block_fb_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _block_fb_key_resp_allKeys = _block_fb_key_resp_allKeys.concat(theseKeys);
      if (_block_fb_key_resp_allKeys.length > 0) {
        block_fb_key_resp.keys = _block_fb_key_resp_allKeys[_block_fb_key_resp_allKeys.length - 1].name;  // just the last key pressed
        block_fb_key_resp.rt = _block_fb_key_resp_allKeys[_block_fb_key_resp_allKeys.length - 1].rt;
        block_fb_key_resp.duration = _block_fb_key_resp_allKeys[_block_fb_key_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of block_fbComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_fbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_fb' ---
    for (const thisComponent of block_fbComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('block_fb.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    count = 0;
    exp_corr = [];
    exp_rt = [];
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(block_fb_key_resp.corr, level);
    }
    psychoJS.experiment.addData('block_fb_key_resp.keys', block_fb_key_resp.keys);
    if (typeof block_fb_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('block_fb_key_resp.rt', block_fb_key_resp.rt);
        psychoJS.experiment.addData('block_fb_key_resp.duration', block_fb_key_resp.duration);
        routineTimer.reset();
        }
    
    block_fb_key_resp.stop();
    // the Routine "block_fb" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gotValidClick;
var restComponents;
function restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest' ---
    t = 0;
    restClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('rest.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_7
    if ((block_loop.thisN === 3)) {
        continueRoutine = false;
    } else {
        continueRoutine = true;
    }
    blockn = (3 - block_loop.thisN);
    rest_text = `休息2分钟
    
    准备好了请点击“继续”
    
    当前剩余${blockn}组实验`
    ;
    
    text_rest.setText(rest_text);
    // setup some python lists for storing info about the mouse_contn
    // current position of the mouse:
    mouse_contn.x = [];
    mouse_contn.y = [];
    mouse_contn.leftButton = [];
    mouse_contn.midButton = [];
    mouse_contn.rightButton = [];
    mouse_contn.time = [];
    mouse_contn.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    restComponents = [];
    restComponents.push(text_rest);
    restComponents.push(contn);
    restComponents.push(mouse_contn);
    
    for (const thisComponent of restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest' ---
    // get current time
    t = restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_rest* updates
    if (t >= 0.0 && text_rest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_rest.tStart = t;  // (not accounting for frame time here)
      text_rest.frameNStart = frameN;  // exact frame index
      
      text_rest.setAutoDraw(true);
    }
    
    
    // *contn* updates
    if (t >= 120 && contn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contn.tStart = t;  // (not accounting for frame time here)
      contn.frameNStart = frameN;  // exact frame index
      
      contn.setAutoDraw(true);
    }
    
    // *mouse_contn* updates
    if (t >= 120 && mouse_contn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_contn.tStart = t;  // (not accounting for frame time here)
      mouse_contn.frameNStart = frameN;  // exact frame index
      
      mouse_contn.status = PsychoJS.Status.STARTED;
      mouse_contn.mouseClock.reset();
      prevButtonState = mouse_contn.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_contn.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_contn.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [contn]) {
            if (obj.contains(mouse_contn)) {
              gotValidClick = true;
              mouse_contn.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_contn.getPos();
          mouse_contn.x.push(_mouseXYs[0]);
          mouse_contn.y.push(_mouseXYs[1]);
          mouse_contn.leftButton.push(_mouseButtons[0]);
          mouse_contn.midButton.push(_mouseButtons[1]);
          mouse_contn.rightButton.push(_mouseButtons[2]);
          mouse_contn.time.push(mouse_contn.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
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
    for (const thisComponent of restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest' ---
    for (const thisComponent of restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_contn.x) {  psychoJS.experiment.addData('mouse_contn.x', mouse_contn.x[0])};
    if (mouse_contn.y) {  psychoJS.experiment.addData('mouse_contn.y', mouse_contn.y[0])};
    if (mouse_contn.leftButton) {  psychoJS.experiment.addData('mouse_contn.leftButton', mouse_contn.leftButton[0])};
    if (mouse_contn.midButton) {  psychoJS.experiment.addData('mouse_contn.midButton', mouse_contn.midButton[0])};
    if (mouse_contn.rightButton) {  psychoJS.experiment.addData('mouse_contn.rightButton', mouse_contn.rightButton[0])};
    if (mouse_contn.time) {  psychoJS.experiment.addData('mouse_contn.time', mouse_contn.time[0])};
    if (mouse_contn.clicked_name) {  psychoJS.experiment.addData('mouse_contn.clicked_name', mouse_contn.clicked_name[0])};
    
    // the Routine "rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(endpage);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endpage* updates
    if (t >= 0.0 && endpage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endpage.tStart = t;  // (not accounting for frame time here)
      endpage.frameNStart = frameN;  // exact frame index
      
      endpage.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (endpage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      endpage.setAutoDraw(false);
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
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
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
