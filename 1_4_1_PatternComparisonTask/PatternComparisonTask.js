/****************************** 
 * Patterncomparisontask *
 ******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'PatternComparisonTask';  // from the Builder filename that created this script
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
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(Instructions_2RoutineBegin());
flowScheduler.add(Instructions_2RoutineEachFrame());
flowScheduler.add(Instructions_2RoutineEnd());
const prac_block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_block_loopLoopBegin(prac_block_loopLoopScheduler));
flowScheduler.add(prac_block_loopLoopScheduler);
flowScheduler.add(prac_block_loopLoopEnd);







flowScheduler.add(Instructions_3RoutineBegin());
flowScheduler.add(Instructions_3RoutineEachFrame());
flowScheduler.add(Instructions_3RoutineEnd());
const block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_loopLoopBegin(block_loopLoopScheduler));
flowScheduler.add(block_loopLoopScheduler);
flowScheduler.add(block_loopLoopEnd);






flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'prac_conditions.xlsx', 'path': 'prac_conditions.xlsx'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'audio/instr_1.wav', 'path': 'audio/instr_1.wav'},
    {'name': 'audio/instr_2.wav', 'path': 'audio/instr_2.wav'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'audio/instr_3.wav', 'path': 'audio/instr_3.wav'},
    {'name': 'audio/prac_rest_instr_1.wav', 'path': 'audio/prac_rest_instr_1.wav'},
    {'name': 'audio/prac_rest_instr_2.wav', 'path': 'audio/prac_rest_instr_2.wav'},
    {'name': 'audio/wrong.wav', 'path': 'audio/wrong.wav'},
    {'name': 'audio/correct.wav', 'path': 'audio/correct.wav'},
    {'name': 'images/diff1.JPG', 'path': 'images/diff1.JPG'},
    {'name': 'images/diff2.JPG', 'path': 'images/diff2.JPG'},
    {'name': 'images/diff3.JPG', 'path': 'images/diff3.JPG'},
    {'name': 'images/diff4.JPG', 'path': 'images/diff4.JPG'},
    {'name': 'images/diff5.JPG', 'path': 'images/diff5.JPG'},
    {'name': 'images/diff6.JPG', 'path': 'images/diff6.JPG'},
    {'name': 'images/diff7.JPG', 'path': 'images/diff7.JPG'},
    {'name': 'images/diff8.JPG', 'path': 'images/diff8.JPG'},
    {'name': 'images/diff9.JPG', 'path': 'images/diff9.JPG'},
    {'name': 'images/diff10.JPG', 'path': 'images/diff10.JPG'},
    {'name': 'images/diff11.JPG', 'path': 'images/diff11.JPG'},
    {'name': 'images/diff12.JPG', 'path': 'images/diff12.JPG'},
    {'name': 'images/diff13.JPG', 'path': 'images/diff13.JPG'},
    {'name': 'images/diff14.JPG', 'path': 'images/diff14.JPG'},
    {'name': 'images/diff15.JPG', 'path': 'images/diff15.JPG'},
    {'name': 'images/diff16.JPG', 'path': 'images/diff16.JPG'},
    {'name': 'images/diff17.JPG', 'path': 'images/diff17.JPG'},
    {'name': 'images/diff18.JPG', 'path': 'images/diff18.JPG'},
    {'name': 'images/diff19.JPG', 'path': 'images/diff19.JPG'},
    {'name': 'images/diff20.JPG', 'path': 'images/diff20.JPG'},
    {'name': 'images/diff21.JPG', 'path': 'images/diff21.JPG'},
    {'name': 'images/diff22.JPG', 'path': 'images/diff22.JPG'},
    {'name': 'images/diff23.JPG', 'path': 'images/diff23.JPG'},
    {'name': 'images/diff24.JPG', 'path': 'images/diff24.JPG'},
    {'name': 'images/same1.JPG', 'path': 'images/same1.JPG'},
    {'name': 'images/same2.JPG', 'path': 'images/same2.JPG'},
    {'name': 'images/same3.JPG', 'path': 'images/same3.JPG'},
    {'name': 'images/same4.JPG', 'path': 'images/same4.JPG'},
    {'name': 'images/same5.JPG', 'path': 'images/same5.JPG'},
    {'name': 'images/same6.JPG', 'path': 'images/same6.JPG'},
    {'name': 'images/same7.JPG', 'path': 'images/same7.JPG'},
    {'name': 'images/same8.JPG', 'path': 'images/same8.JPG'},
    {'name': 'images/same9.JPG', 'path': 'images/same9.JPG'},
    {'name': 'images/same10.JPG', 'path': 'images/same10.JPG'},
    {'name': 'images/same11.JPG', 'path': 'images/same11.JPG'},
    {'name': 'images/same12.JPG', 'path': 'images/same12.JPG'},
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
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u4e3b\u8bd5ID"]}_1_4_1_${expName}_${expInfo["\u7f16\u53f7"]}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var instructions_1;
var key_resp_1;
var instr_1_sound;
var Instructions_2Clock;
var instructions_2;
var key_resp_2;
var instr_2_sound;
var prac_restClock;
var prac_rest_text;
var prac_rest_instr;
var prac_rest_key_resp;
var prac_rest_sound;
var prac_TrialClock;
var exp_corr;
var exp_rt;
var prac_feedb;
var prac_feedbColor;
var prac_fix;
var prac_first_stimulus;
var prac_second_stimulus;
var prac_keys_text;
var prac_response;
var prac_FeedbackClock;
var prac_feedback_text;
var prac_feedb_sound;
var prac_Block_FeedbackClock;
var block_feedb;
var exp_acc;
var exp_meanRT;
var prac_block_feedback_text;
var prac_block_fb_key_resp;
var Instructions_3Clock;
var instructions_3;
var key_resp_3;
var instr_sound_3;
var TrialClock;
var fix;
var first_stimulus;
var second_stimulus;
var keys_text;
var response;
var Block_FeedbackClock;
var block_feedback_text;
var block_fb_key_resp;
var restClock;
var rest_text;
var rest_instr;
var contn;
var mouse_contn;
var EndClock;
var thank_you;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_1',
    text: '欢迎您参加本任务。\n\n在这项任务中，\n将同时呈现两个图片，\n您需要判断所呈现的图片是相同还是不同。\n\n如果图片相同，请按 z 键；\n如果图片不同，请按 m 键。\n\n\n按空格键继续。\n',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_1_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_1.wav',
      secs: (- 1),
      });
  instr_1_sound.setVolume(1.0);
  // Initialize components for Routine "Instructions_2"
  Instructions_2Clock = new util.Clock();
  instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_2',
    text: '现在，请试一试。\n\n请保持注视屏幕上的“+”注视点，\n并在看到图片后立即做出反应，\n试着在保证正确的同时尽可能快地回答。\n我们将提供反馈（包括反应时间）。\n\n如果您回答错误，继续回答下一题即可。\n记得，在整个实验过程中将手指放在答题键上。\n\n\n按空格键开始练习。\n',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_2_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_2.wav',
      secs: (- 1),
      });
  instr_2_sound.setVolume(1.0);
  // Initialize components for Routine "prac_rest"
  prac_restClock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
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
  // Initialize components for Routine "prac_Trial"
  prac_TrialClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  exp_corr = [];
  exp_rt = [];
  prac_feedb = "";
  prac_feedbColor = "";
  
  prac_fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  prac_first_stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_first_stimulus', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  prac_second_stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_second_stimulus', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  prac_keys_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_keys_text',
    text: '< 相同       不同 >',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  prac_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_Feedback"
  prac_FeedbackClock = new util.Clock();
  prac_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_feedback_text',
    text: '',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  prac_feedb_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 1,
      });
  prac_feedb_sound.setVolume(1.0);
  // Initialize components for Routine "prac_Block_Feedback"
  prac_Block_FeedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  block_feedb = "";
  exp_acc = 0;
  exp_meanRT = 0
  prac_block_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_block_feedback_text',
    text: '',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  prac_block_fb_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions_3"
  Instructions_3Clock = new util.Clock();
  instructions_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_3',
    text: '做得好！练习结束了。\n\n我们开始正式实验吧。\n请注意，正式实验中不再提供正误反馈。\n\n记得，在看到数字后立即做出反应，\n试着在保证正确的同时尽可能快地回答。\n\n\n请按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_3.wav',
      secs: (- 1),
      });
  instr_sound_3.setVolume(1.0);
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  first_stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'first_stimulus', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  second_stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'second_stimulus', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  keys_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'keys_text',
    text: '< 相同       不同 >',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Block_Feedback"
  Block_FeedbackClock = new util.Clock();
  block_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_feedback_text',
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
  // Run 'Begin Experiment' code from code_6
  rest_text = "";
  
  rest_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'rest_instr',
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
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_contn = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_contn.mouseClock = new util.Clock();
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: '实验结束。\n\n感谢您的参与！\n',
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
var _key_resp_1_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    key_resp_1.keys = undefined;
    key_resp_1.rt = undefined;
    _key_resp_1_allKeys = [];
    instr_1_sound.setVolume(1.0);
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instructions_1);
    InstructionsComponents.push(key_resp_1);
    InstructionsComponents.push(instr_1_sound);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_1* updates
    if (t >= 0.0 && instructions_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_1.tStart = t;  // (not accounting for frame time here)
      instructions_1.frameNStart = frameN;  // exact frame index
      
      instructions_1.setAutoDraw(true);
    }
    
    
    // *key_resp_1* updates
    if (t >= 0.0 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_1.tStart = t;  // (not accounting for frame time here)
      key_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.clearEvents(); });
    }
    
    if (key_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_1_allKeys = _key_resp_1_allKeys.concat(theseKeys);
      if (_key_resp_1_allKeys.length > 0) {
        key_resp_1.keys = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_1.rt = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].rt;
        key_resp_1.duration = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop instr_1_sound
    if (t >= 0.0 && instr_1_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_1_sound.tStart = t;  // (not accounting for frame time here)
      instr_1_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_1_sound.play(); });  // screen flip
      instr_1_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_1_sound.getDuration() + instr_1_sound.tStart)     && instr_1_sound.status === PsychoJS.Status.STARTED) {
      instr_1_sound.stop();  // stop the sound (if longer than duration)
      instr_1_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of InstructionsComponents)
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


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_1.keys', key_resp_1.keys);
    if (typeof key_resp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_1.rt', key_resp_1.rt);
        psychoJS.experiment.addData('key_resp_1.duration', key_resp_1.duration);
        routineTimer.reset();
        }
    
    key_resp_1.stop();
    instr_1_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var Instructions_2Components;
function Instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions_2' ---
    t = 0;
    Instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions_2.started', globalClock.getTime());
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    instr_2_sound.setVolume(1.0);
    // keep track of which components have finished
    Instructions_2Components = [];
    Instructions_2Components.push(instructions_2);
    Instructions_2Components.push(key_resp_2);
    Instructions_2Components.push(instr_2_sound);
    
    for (const thisComponent of Instructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions_2' ---
    // get current time
    t = Instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_2* updates
    if (t >= 0.0 && instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_2.tStart = t;  // (not accounting for frame time here)
      instructions_2.frameNStart = frameN;  // exact frame index
      
      instructions_2.setAutoDraw(true);
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
    for (const thisComponent of Instructions_2Components)
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


function Instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_2' ---
    for (const thisComponent of Instructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions_2.stopped', globalClock.getTime());
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
    instr_2_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "Instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_block_loop;
function prac_block_loopLoopBegin(prac_block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.RANDOM,
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
      const prac_trialsLoopScheduler = new Scheduler(psychoJS);
      prac_block_loopLoopScheduler.add(prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot));
      prac_block_loopLoopScheduler.add(prac_trialsLoopScheduler);
      prac_block_loopLoopScheduler.add(prac_trialsLoopEnd);
      prac_block_loopLoopScheduler.add(prac_Block_FeedbackRoutineBegin(snapshot));
      prac_block_loopLoopScheduler.add(prac_Block_FeedbackRoutineEachFrame());
      prac_block_loopLoopScheduler.add(prac_Block_FeedbackRoutineEnd(snapshot));
      prac_block_loopLoopScheduler.add(prac_block_loopLoopEndIteration(prac_block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var prac_trials;
function prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'prac_conditions.xlsx',
      seed: undefined, name: 'prac_trials'
    });
    psychoJS.experiment.addLoop(prac_trials); // add the loop to the experiment
    currentLoop = prac_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_trial of prac_trials) {
      snapshot = prac_trials.getSnapshot();
      prac_trialsLoopScheduler.add(importConditions(snapshot));
      prac_trialsLoopScheduler.add(prac_TrialRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(prac_TrialRoutineEachFrame());
      prac_trialsLoopScheduler.add(prac_TrialRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(prac_FeedbackRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(prac_FeedbackRoutineEachFrame());
      prac_trialsLoopScheduler.add(prac_FeedbackRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(prac_trialsLoopEndIteration(prac_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trialsLoopEndIteration(scheduler, snapshot) {
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
      nReps: 4, method: TrialHandler.Method.RANDOM,
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
      const trialsLoopScheduler = new Scheduler(psychoJS);
      block_loopLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      block_loopLoopScheduler.add(trialsLoopScheduler);
      block_loopLoopScheduler.add(trialsLoopEnd);
      block_loopLoopScheduler.add(Block_FeedbackRoutineBegin(snapshot));
      block_loopLoopScheduler.add(Block_FeedbackRoutineEachFrame());
      block_loopLoopScheduler.add(Block_FeedbackRoutineEnd(snapshot));
      block_loopLoopScheduler.add(restRoutineBegin(snapshot));
      block_loopLoopScheduler.add(restRoutineEachFrame());
      block_loopLoopScheduler.add(restRoutineEnd(snapshot));
      block_loopLoopScheduler.add(block_loopLoopEndIteration(block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(TrialRoutineBegin(snapshot));
      trialsLoopScheduler.add(TrialRoutineEachFrame());
      trialsLoopScheduler.add(TrialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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
    // Run 'Begin Routine' code from code_3
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


var piclist;
var filename;
var prac_picture1;
var prac_picture2;
var _prac_response_allKeys;
var prac_TrialComponents;
function prac_TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_Trial' ---
    t = 0;
    prac_TrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_Trial.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    piclist = [];
    filename = "";
    for (var i, _pj_c = 0, _pj_a = util.range(1, 13), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        filename = `images/same${i}.JPG`;
        piclist.push(filename);
    }
    for (var j, _pj_c = 0, _pj_a = util.range(1, 25), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        j = _pj_a[_pj_c];
        filename = `images/diff${j}.JPG`;
        piclist.push(filename);
    }
    util.shuffle(piclist);
    prac_picture1 = piclist.pop();
    if ((prac_cond === "same")) {
        prac_picture2 = prac_picture1;
    }
    if ((prac_cond === "different")) {
        prac_picture2 = piclist.pop();
    }
    
    prac_first_stimulus.setImage(prac_picture1);
    prac_second_stimulus.setImage(prac_picture2);
    prac_response.keys = undefined;
    prac_response.rt = undefined;
    _prac_response_allKeys = [];
    // keep track of which components have finished
    prac_TrialComponents = [];
    prac_TrialComponents.push(prac_fix);
    prac_TrialComponents.push(prac_first_stimulus);
    prac_TrialComponents.push(prac_second_stimulus);
    prac_TrialComponents.push(prac_keys_text);
    prac_TrialComponents.push(prac_response);
    
    for (const thisComponent of prac_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function prac_TrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_Trial' ---
    // get current time
    t = prac_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_fix* updates
    if (t >= 0.0 && prac_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_fix.tStart = t;  // (not accounting for frame time here)
      prac_fix.frameNStart = frameN;  // exact frame index
      
      prac_fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_fix.setAutoDraw(false);
    }
    
    // *prac_first_stimulus* updates
    if (t >= 1 && prac_first_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_first_stimulus.tStart = t;  // (not accounting for frame time here)
      prac_first_stimulus.frameNStart = frameN;  // exact frame index
      
      prac_first_stimulus.setAutoDraw(true);
    }
    
    
    // *prac_second_stimulus* updates
    if (t >= 1 && prac_second_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_second_stimulus.tStart = t;  // (not accounting for frame time here)
      prac_second_stimulus.frameNStart = frameN;  // exact frame index
      
      prac_second_stimulus.setAutoDraw(true);
    }
    
    
    // *prac_keys_text* updates
    if (t >= 1 && prac_keys_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_keys_text.tStart = t;  // (not accounting for frame time here)
      prac_keys_text.frameNStart = frameN;  // exact frame index
      
      prac_keys_text.setAutoDraw(true);
    }
    
    
    // *prac_response* updates
    if (t >= 1 && prac_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_response.tStart = t;  // (not accounting for frame time here)
      prac_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_response.clearEvents(); });
    }
    
    if (prac_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_response.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _prac_response_allKeys = _prac_response_allKeys.concat(theseKeys);
      if (_prac_response_allKeys.length > 0) {
        prac_response.keys = _prac_response_allKeys[_prac_response_allKeys.length - 1].name;  // just the last key pressed
        prac_response.rt = _prac_response_allKeys[_prac_response_allKeys.length - 1].rt;
        prac_response.duration = _prac_response_allKeys[_prac_response_allKeys.length - 1].duration;
        // was this correct?
        if (prac_response.keys == prac_corrAns) {
            prac_response.corr = 1;
        } else {
            prac_response.corr = 0;
        }
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
    for (const thisComponent of prac_TrialComponents)
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


var prac_feedb_audio;
function prac_TrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_Trial' ---
    for (const thisComponent of prac_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_Trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    if ((prac_response.corr === 1)) {
        prac_feedb = `正确!`;
        prac_feedb_audio = "audio/correct.wav";
        exp_rt.splice(0, 0, prac_response.rt);
    } else {
        prac_feedb = "\u9519\u8bef!";
        prac_feedb_audio = "audio/wrong.wav";
    }
    exp_corr.splice(0, 0, prac_response.corr);
    psychoJS.experiment.addData("exp_corr", exp_corr);
    psychoJS.experiment.addData("prac_feedb_text", prac_feedb);
    
    prac_feedb_sound = new sound.Sound({
        win: psychoJS.window,
        value: 'A',
        secs: 1,
        });
    prac_feedb_sound.setVolume(1.0)
    // was no response the correct answer?!
    if (prac_response.keys === undefined) {
      if (['None','none',undefined].includes(prac_corrAns)) {
         prac_response.corr = 1;  // correct non-response
      } else {
         prac_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_response.corr, level);
    }
    psychoJS.experiment.addData('prac_response.keys', prac_response.keys);
    psychoJS.experiment.addData('prac_response.corr', prac_response.corr);
    if (typeof prac_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_response.rt', prac_response.rt);
        psychoJS.experiment.addData('prac_response.duration', prac_response.duration);
        routineTimer.reset();
        }
    
    prac_response.stop();
    // the Routine "prac_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_FeedbackComponents;
function prac_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_Feedback' ---
    t = 0;
    prac_FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_Feedback.started', globalClock.getTime());
    prac_feedback_text.setText(prac_feedb);
    prac_feedb_sound.setValue(prac_feedb_audio);
    prac_feedb_sound.secs=1;
    prac_feedb_sound.setVolume(1.0);
    // keep track of which components have finished
    prac_FeedbackComponents = [];
    prac_FeedbackComponents.push(prac_feedback_text);
    prac_FeedbackComponents.push(prac_feedb_sound);
    
    for (const thisComponent of prac_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_Feedback' ---
    // get current time
    t = prac_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_feedback_text* updates
    if (t >= 0.0 && prac_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_feedback_text.tStart = t;  // (not accounting for frame time here)
      prac_feedback_text.frameNStart = frameN;  // exact frame index
      
      prac_feedback_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_feedback_text.setAutoDraw(false);
    }
    // start/stop prac_feedb_sound
    if (t >= 0.0 && prac_feedb_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_feedb_sound.tStart = t;  // (not accounting for frame time here)
      prac_feedb_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ prac_feedb_sound.play(); });  // screen flip
      prac_feedb_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    for (const thisComponent of prac_FeedbackComponents)
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


function prac_FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_Feedback' ---
    for (const thisComponent of prac_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_Feedback.stopped', globalClock.getTime());
    prac_feedb_sound.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _prac_block_fb_key_resp_allKeys;
var prac_Block_FeedbackComponents;
function prac_Block_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_Block_Feedback' ---
    t = 0;
    prac_Block_FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_Block_Feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    exp_acc = (exp_corr.reduce((a, b) => a + b, 0) / exp_corr.length) * 100;
    
    if (exp_rt.length == 0) {
        block_feedb = '您的正确率为0。\n请确保明白实验规则再继续实验。\n\n\n请按空格键继续。';
    } else {
        exp_meanRT = exp_rt.reduce((a, b) => a + b, 0) / exp_rt.length;
        block_feedb = `您的正确率为${exp_acc.toFixed(2)}%\n您的平均反应时为${exp_meanRT.toFixed(2)}秒\n\n\n请按空格键继续。`;
    }
    prac_block_feedback_text.setText(block_feedb);
    prac_block_fb_key_resp.keys = undefined;
    prac_block_fb_key_resp.rt = undefined;
    _prac_block_fb_key_resp_allKeys = [];
    // keep track of which components have finished
    prac_Block_FeedbackComponents = [];
    prac_Block_FeedbackComponents.push(prac_block_feedback_text);
    prac_Block_FeedbackComponents.push(prac_block_fb_key_resp);
    
    for (const thisComponent of prac_Block_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_Block_FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_Block_Feedback' ---
    // get current time
    t = prac_Block_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_block_feedback_text* updates
    if (t >= 0.0 && prac_block_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_block_feedback_text.tStart = t;  // (not accounting for frame time here)
      prac_block_feedback_text.frameNStart = frameN;  // exact frame index
      
      prac_block_feedback_text.setAutoDraw(true);
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
    for (const thisComponent of prac_Block_FeedbackComponents)
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


function prac_Block_FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_Block_Feedback' ---
    for (const thisComponent of prac_Block_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prac_Block_Feedback.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_4
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
    // the Routine "prac_Block_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var Instructions_3Components;
function Instructions_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions_3' ---
    t = 0;
    Instructions_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions_3.started', globalClock.getTime());
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    instr_sound_3.setVolume(1.0);
    // keep track of which components have finished
    Instructions_3Components = [];
    Instructions_3Components.push(instructions_3);
    Instructions_3Components.push(key_resp_3);
    Instructions_3Components.push(instr_sound_3);
    
    for (const thisComponent of Instructions_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions_3' ---
    // get current time
    t = Instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_3* updates
    if (t >= 0.0 && instructions_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_3.tStart = t;  // (not accounting for frame time here)
      instructions_3.frameNStart = frameN;  // exact frame index
      
      instructions_3.setAutoDraw(true);
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
    
    // start/stop instr_sound_3
    if (t >= 0.0 && instr_sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_sound_3.tStart = t;  // (not accounting for frame time here)
      instr_sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_sound_3.play(); });  // screen flip
      instr_sound_3.status = PsychoJS.Status.STARTED;
    }
    if (t >= (instr_sound_3.getDuration() + instr_sound_3.tStart)     && instr_sound_3.status === PsychoJS.Status.STARTED) {
      instr_sound_3.stop();  // stop the sound (if longer than duration)
      instr_sound_3.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of Instructions_3Components)
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


function Instructions_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_3' ---
    for (const thisComponent of Instructions_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions_3.stopped', globalClock.getTime());
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
    instr_sound_3.stop();  // ensure sound has stopped at end of Routine
    // the Routine "Instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var picture1;
var picture2;
var _response_allKeys;
var TrialComponents;
function TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Trial' ---
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Trial.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    piclist = [];
    filename = "";
    for (var i, _pj_c = 0, _pj_a = util.range(1, 13), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        filename = `images/same${i}.JPG`;
        piclist.push(filename);
    }
    for (var j, _pj_c = 0, _pj_a = util.range(1, 25), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        j = _pj_a[_pj_c];
        filename = `images/diff${j}.JPG`;
        piclist.push(filename);
    }
    util.shuffle(piclist);
    picture1 = piclist.pop();
    if ((cond === "same")) {
        picture2 = picture1;
    }
    if ((cond === "different")) {
        picture2 = piclist.pop();
    }
    
    first_stimulus.setImage(picture1);
    second_stimulus.setImage(picture2);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(fix);
    TrialComponents.push(first_stimulus);
    TrialComponents.push(second_stimulus);
    TrialComponents.push(keys_text);
    TrialComponents.push(response);
    
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Trial' ---
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
    }
    
    // *first_stimulus* updates
    if (t >= 1 && first_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      first_stimulus.tStart = t;  // (not accounting for frame time here)
      first_stimulus.frameNStart = frameN;  // exact frame index
      
      first_stimulus.setAutoDraw(true);
    }
    
    
    // *second_stimulus* updates
    if (t >= 1 && second_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      second_stimulus.tStart = t;  // (not accounting for frame time here)
      second_stimulus.frameNStart = frameN;  // exact frame index
      
      second_stimulus.setAutoDraw(true);
    }
    
    
    // *keys_text* updates
    if (t >= 1 && keys_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keys_text.tStart = t;  // (not accounting for frame time here)
      keys_text.frameNStart = frameN;  // exact frame index
      
      keys_text.setAutoDraw(true);
    }
    
    
    // *response* updates
    if (t >= 1 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }
    
    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        response.duration = _response_allKeys[_response_allKeys.length - 1].duration;
        // was this correct?
        if (response.keys == corrAns) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
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
    for (const thisComponent of TrialComponents)
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


function TrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Trial' ---
    for (const thisComponent of TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    if ((response.corr === 1)) {
        exp_rt.splice(0, 0, response.rt);
    } 
    exp_corr.splice(0, 0, response.corr);
    psychoJS.experiment.addData("exp_corr", exp_corr);
    
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        psychoJS.experiment.addData('response.duration', response.duration);
        routineTimer.reset();
        }
    
    response.stop();
    // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _block_fb_key_resp_allKeys;
var Block_FeedbackComponents;
function Block_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Block_Feedback' ---
    t = 0;
    Block_FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Block_Feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_5
    exp_acc = (exp_corr.reduce((a, b) => a + b, 0) / exp_corr.length) * 100;
    
    if (exp_rt.length == 0) {
        block_feedb = '您的正确率为0。\n请确保明白实验规则再继续实验。\n\n\n请按空格键继续。';
    } else {
        exp_meanRT = exp_rt.reduce((a, b) => a + b, 0) / exp_rt.length;
        block_feedb = `您的正确率为${exp_acc.toFixed(2)}%\n您的平均反应时为${exp_meanRT.toFixed(2)}秒\n\n\n请按空格键继续。`;
    }
    block_feedback_text.setText(block_feedb);
    block_fb_key_resp.keys = undefined;
    block_fb_key_resp.rt = undefined;
    _block_fb_key_resp_allKeys = [];
    // keep track of which components have finished
    Block_FeedbackComponents = [];
    Block_FeedbackComponents.push(block_feedback_text);
    Block_FeedbackComponents.push(block_fb_key_resp);
    
    for (const thisComponent of Block_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Block_FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Block_Feedback' ---
    // get current time
    t = Block_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_feedback_text* updates
    if (t >= 0.0 && block_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_feedback_text.tStart = t;  // (not accounting for frame time here)
      block_feedback_text.frameNStart = frameN;  // exact frame index
      
      block_feedback_text.setAutoDraw(true);
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
    for (const thisComponent of Block_FeedbackComponents)
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


function Block_FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Block_Feedback' ---
    for (const thisComponent of Block_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Block_Feedback.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_5
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
    // the Routine "Block_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blockn;
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
    // Run 'Begin Routine' code from code_6
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
    
    rest_instr.setText(rest_text);
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
    restComponents.push(rest_instr);
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
    
    // *rest_instr* updates
    if (t >= 0.0 && rest_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rest_instr.tStart = t;  // (not accounting for frame time here)
      rest_instr.frameNStart = frameN;  // exact frame index
      
      rest_instr.setAutoDraw(true);
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


var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(thank_you);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thank_you* updates
    if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_you.tStart = t;  // (not accounting for frame time here)
      thank_you.frameNStart = frameN;  // exact frame index
      
      thank_you.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thank_you.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thank_you.setAutoDraw(false);
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
    for (const thisComponent of EndComponents)
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


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
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
