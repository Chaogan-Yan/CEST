/************* 
 * Palt *
 *************/

import { core, data, sound, util, visual, hardware } from '../lib/psychojs-2023.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'PALT';  // from the Builder filename that created this script./lib
let expInfo = {
    '编号': '',
    '主试ID': '',
};

// Start code blocks for 'Before Experiment'
/* BEGIN CUSTOM CODE */
;(async () => {
  // Ask for pemission to use the mic
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
})();
/* END */
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
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin(blockLoopScheduler));
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);











flowScheduler.add(recallRoutineBegin());
flowScheduler.add(recallRoutineEachFrame());
flowScheduler.add(recallRoutineEnd());
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
    {'name': 'zdy_with_sound.xlsx', 'path': 'zdy_with_sound.xlsx'},
    {'name': 'audio/instr_3_1.wav', 'path': 'audio/instr_3_1.wav'},
    {'name': 'audio/instr_3_2.wav', 'path': 'audio/instr_3_2.wav'},
    {'name': 'audio/instr_3_3.wav', 'path': 'audio/instr_3_3.wav'},
    {'name': 'read_sound.xlsx', 'path': 'read_sound.xlsx'},
    {'name': 'audio/西瓜.wav', 'path': 'audio/西瓜.wav'},
    {'name': 'audio/衣服.wav', 'path': 'audio/衣服.wav'},
    {'name': 'audio/太阳.wav', 'path': 'audio/太阳.wav'},
    {'name': 'audio/月亮.wav', 'path': 'audio/月亮.wav'},
    {'name': 'audio/困难.wav', 'path': 'audio/困难.wav'},
    {'name': 'audio/容易.wav', 'path': 'audio/容易.wav'},
    {'name': 'audio/团结.wav', 'path': 'audio/团结.wav'},
    {'name': 'audio/长短.wav', 'path': 'audio/长短.wav'},
    {'name': 'audio/勇敢.wav', 'path': 'audio/勇敢.wav'},
    {'name': 'audio/电灯.wav', 'path': 'audio/电灯.wav'},
    {'name': 'audio/北方.wav', 'path': 'audio/北方.wav'},
    {'name': 'audio/东方.wav', 'path': 'audio/东方.wav'},
    {'name': 'audio/老师.wav', 'path': 'audio/老师.wav'},
    {'name': 'audio/铁路.wav', 'path': 'audio/铁路.wav'},
    {'name': 'audio/站着.wav', 'path': 'audio/站着.wav'},
    {'name': 'audio/躺下.wav', 'path': 'audio/躺下.wav'},
    {'name': 'audio/热心.wav', 'path': 'audio/热心.wav'},
    {'name': 'audio/玻璃.wav', 'path': 'audio/玻璃.wav'},
    {'name': 'audio/光明.wav', 'path': 'audio/光明.wav'},
    {'name': 'audio/服从.wav', 'path': 'audio/服从.wav'},
    {'name': 'audio/颜色.wav', 'path': 'audio/颜色.wav'},
    {'name': 'audio/粉红.wav', 'path': 'audio/粉红.wav'},
    {'name': 'audio/牲口.wav', 'path': 'audio/牲口.wav'},
    {'name': 'audio/牛马.wav', 'path': 'audio/牛马.wav'},
    {'name': 'answer_sound.xlsx', 'path': 'answer_sound.xlsx'},
    {'name': 'audio/西瓜.wav', 'path': 'audio/西瓜.wav'},
    {'name': 'audio/太阳.wav', 'path': 'audio/太阳.wav'},
    {'name': 'audio/困难.wav', 'path': 'audio/困难.wav'},
    {'name': 'audio/团结.wav', 'path': 'audio/团结.wav'},
    {'name': 'audio/勇敢.wav', 'path': 'audio/勇敢.wav'},
    {'name': 'audio/北方.wav', 'path': 'audio/北方.wav'},
    {'name': 'audio/老师.wav', 'path': 'audio/老师.wav'},
    {'name': 'audio/站着.wav', 'path': 'audio/站着.wav'},
    {'name': 'audio/热心.wav', 'path': 'audio/热心.wav'},
    {'name': 'audio/光明.wav', 'path': 'audio/光明.wav'},
    {'name': 'audio/颜色.wav', 'path': 'audio/颜色.wav'},
    {'name': 'audio/牲口.wav', 'path': 'audio/牲口.wav'},
    {'name': 'audio/instr.wav', 'path': 'audio/instr.wav'},
    {'name': 'audio/instr_2.wav', 'path': 'audio/instr_2.wav'},
    {'name': 'player_icon.jpg', 'path': 'player_icon.jpg'},
    {'name': 'audio/instr_4.wav', 'path': 'audio/instr_4.wav'},
    {'name': 'mic_icon.jpg', 'path': 'mic_icon.jpg'},
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
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u4e3b\u8bd5ID"]}_1_6_1_${expName}_${expInfo["\u7f16\u53f7"]}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_text;
var key_resp;
var instr_sound;
var instr_2Clock;
var instr_2_text;
var key_resp_2;
var instr_2_sound;
var instr_3Clock;
var instr_3_text;
var instr_3_sound;
var S1Clock;
var sound_1;
var image;
var S2Clock;
var sound_2;
var image_2;
var intervalClock;
var text_2;
var instr_4Clock;
var instr_4_text;
var key_resp_3;
var instr_4_sound;
var answerClock;
var sound_3;
var image_3;
var text;
var mic;
var image_4;
var recallClock;
var recall_text;
var textbox;
var button;
var thanksClock;
var endpage;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: '欢迎参加词语配对联想学习测验！\n\n在这个测验中，我将给您播放12对词，您要注意听，\n\n要求您记住哪两个词是连在一起的一对，\n\n比如我念“桌子-马车”，\n\n表示“桌子”和“马车”是连在一起的一对词。\n\n\n按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr.wav',
      secs: (- 1),
      });
  instr_sound.setVolume(1.0);
  // Initialize components for Routine "instr_2"
  instr_2Clock = new util.Clock();
  instr_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_2_text',
    text: '12对词播放完毕后，就会开始测试，\n\n我念每对词中前面的一个词，\n\n要求您答出和它一对的后面一个词来，\n\n比如念“桌子”，您就答“马车”，听明白了么？\n\n\n按空格键继续。',
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
  // Initialize components for Routine "instr_3"
  instr_3Clock = new util.Clock();
  instr_3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_3_text',
    text: '',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_3_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  instr_3_sound.setVolume(1.0);
  // Initialize components for Routine "S1"
  S1Clock = new util.Clock();
  sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 1.5,
      });
  sound_1.setVolume(1.0);
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'player_icon.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "S2"
  S2Clock = new util.Clock();
  sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 1.5,
      });
  sound_2.setVolume(1.0);
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'player_icon.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "interval"
  intervalClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instr_4"
  instr_4Clock = new util.Clock();
  instr_4_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_4_text',
    text: '好，下面我读前面一个词，\n\n请您回答和它一对儿的后面一个词。\n\n请注意，每对词允许的回忆时间为5秒。\n\n请在看到“请作答”的提示字样后作答。\n\n\n按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_4_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/instr_4.wav',
      secs: (- 1),
      });
  instr_4_sound.setVolume(1.0);
  // Initialize components for Routine "answer"
  answerClock = new util.Clock();
  sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 1.5,
      });
  sound_3.setVolume(1.0);
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'player_icon.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '请作答',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mic = new sound.Microphone({
    win : psychoJS.window, 
    name:'mic',
    sampleRateHz : 48000,
    channels : 'auto',
    maxRecordingSize : 24000.0,
    loopback : true,
    policyWhenFull : 'ignore',
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'mic_icon.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.1], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "recall"
  recallClock = new util.Clock();
  recall_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_text',
    text: '回忆结束，现在，请想一想，您刚才是用什么方法记忆这些词对的？\n\n您可以具体回忆一下刚才记忆成功的词对，想想您是如何记住它们的。\n\n请直接输入文字，并点击蓝色方格提交。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.3], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: '请大致描述您记忆词对的方式...',
    font: 'Heiti SC',
    pos: [0, 0], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: '提交',
    fillColor: [(- 1.0), (- 1.0), 0.0902],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.035,
    size: [0.1, 0.06],
    depth: -2
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  endpage = new visual.TextStim({
    win: psychoJS.window,
    name: 'endpage',
    text: '实验结束，感谢您的参与！',
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
var _key_resp_allKeys;
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
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    instr_sound.setVolume(1.0);
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(key_resp);
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
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
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
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
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


var _key_resp_2_allKeys;
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
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    instr_2_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_2Components = [];
    instr_2Components.push(instr_2_text);
    instr_2Components.push(key_resp_2);
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
    
    // *instr_2_text* updates
    if (t >= 0.0 && instr_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_2_text.tStart = t;  // (not accounting for frame time here)
      instr_2_text.frameNStart = frameN;  // exact frame index
      
      instr_2_text.setAutoDraw(true);
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
    // the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block;
function blockLoopBegin(blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'zdy_with_sound.xlsx',
      seed: undefined, name: 'block'
    });
    psychoJS.experiment.addLoop(block); // add the loop to the experiment
    currentLoop = block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of block) {
      snapshot = block.getSnapshot();
      blockLoopScheduler.add(importConditions(snapshot));
      blockLoopScheduler.add(instr_3RoutineBegin(snapshot));
      blockLoopScheduler.add(instr_3RoutineEachFrame());
      blockLoopScheduler.add(instr_3RoutineEnd(snapshot));
      const read_trialsLoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(read_trialsLoopBegin(read_trialsLoopScheduler, snapshot));
      blockLoopScheduler.add(read_trialsLoopScheduler);
      blockLoopScheduler.add(read_trialsLoopEnd);
      blockLoopScheduler.add(instr_4RoutineBegin(snapshot));
      blockLoopScheduler.add(instr_4RoutineEachFrame());
      blockLoopScheduler.add(instr_4RoutineEnd(snapshot));
      const answer_trialsLoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(answer_trialsLoopBegin(answer_trialsLoopScheduler, snapshot));
      blockLoopScheduler.add(answer_trialsLoopScheduler);
      blockLoopScheduler.add(answer_trialsLoopEnd);
      blockLoopScheduler.add(blockLoopEndIteration(blockLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var read_trials;
function read_trialsLoopBegin(read_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    read_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'read_sound.xlsx',
      seed: undefined, name: 'read_trials'
    });
    psychoJS.experiment.addLoop(read_trials); // add the loop to the experiment
    currentLoop = read_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRead_trial of read_trials) {
      snapshot = read_trials.getSnapshot();
      read_trialsLoopScheduler.add(importConditions(snapshot));
      read_trialsLoopScheduler.add(S1RoutineBegin(snapshot));
      read_trialsLoopScheduler.add(S1RoutineEachFrame());
      read_trialsLoopScheduler.add(S1RoutineEnd(snapshot));
      read_trialsLoopScheduler.add(S2RoutineBegin(snapshot));
      read_trialsLoopScheduler.add(S2RoutineEachFrame());
      read_trialsLoopScheduler.add(S2RoutineEnd(snapshot));
      read_trialsLoopScheduler.add(intervalRoutineBegin(snapshot));
      read_trialsLoopScheduler.add(intervalRoutineEachFrame());
      read_trialsLoopScheduler.add(intervalRoutineEnd(snapshot));
      read_trialsLoopScheduler.add(read_trialsLoopEndIteration(read_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function read_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(read_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function read_trialsLoopEndIteration(scheduler, snapshot) {
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


var answer_trials;
function answer_trialsLoopBegin(answer_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    answer_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'answer_sound.xlsx',
      seed: undefined, name: 'answer_trials'
    });
    psychoJS.experiment.addLoop(answer_trials); // add the loop to the experiment
    currentLoop = answer_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAnswer_trial of answer_trials) {
      snapshot = answer_trials.getSnapshot();
      answer_trialsLoopScheduler.add(importConditions(snapshot));
      answer_trialsLoopScheduler.add(answerRoutineBegin(snapshot));
      answer_trialsLoopScheduler.add(answerRoutineEachFrame());
      answer_trialsLoopScheduler.add(answerRoutineEnd(snapshot));
      answer_trialsLoopScheduler.add(answer_trialsLoopEndIteration(answer_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function answer_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(answer_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function answer_trialsLoopEndIteration(scheduler, snapshot) {
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


async function blockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blockLoopEndIteration(scheduler, snapshot) {
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


var instr_3Components;
function instr_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3' ---
    t = 0;
    instr_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr_3.started', globalClock.getTime());
    instr_3_text.setText(instruction);
    instr_3_sound.setValue(instructions_sound);
    instr_3_sound.secs=4;
    instr_3_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_3Components = [];
    instr_3Components.push(instr_3_text);
    instr_3Components.push(instr_3_sound);
    
    for (const thisComponent of instr_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function instr_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3' ---
    // get current time
    t = instr_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_3_text* updates
    if (t >= 0.0 && instr_3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_text.tStart = t;  // (not accounting for frame time here)
      instr_3_text.frameNStart = frameN;  // exact frame index
      
      instr_3_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instr_3_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instr_3_text.setAutoDraw(false);
    }
    // start/stop instr_3_sound
    if (t >= 0.0 && instr_3_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_sound.tStart = t;  // (not accounting for frame time here)
      instr_3_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ instr_3_sound.play(); });  // screen flip
      instr_3_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instr_3_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= instr_3_sound.tStart + 0.5) {
        instr_3_sound.stop();  // stop the sound (if longer than duration)
        instr_3_sound.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of instr_3Components)
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


function instr_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3' ---
    for (const thisComponent of instr_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3.stopped', globalClock.getTime());
    instr_3_sound.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var S1Components;
function S1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'S1' ---
    t = 0;
    S1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('S1.started', globalClock.getTime());
    sound_1.setValue(sound1);
    sound_1.secs=1.5;
    sound_1.setVolume(1.0);
    // keep track of which components have finished
    S1Components = [];
    S1Components.push(sound_1);
    S1Components.push(image);
    
    for (const thisComponent of S1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function S1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'S1' ---
    // get current time
    t = S1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_1
    if (t >= 0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_1.tStart + 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
        sound_1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
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
    for (const thisComponent of S1Components)
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


function S1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'S1' ---
    for (const thisComponent of S1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('S1.stopped', globalClock.getTime());
    sound_1 = new sound.Sound({
          win: psychoJS.window,
          value: 'A',
          secs: 1.5,
          });
    sound_1.setVolume(1.0);
    sound_1.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var S2Components;
function S2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'S2' ---
    t = 0;
    S2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('S2.started', globalClock.getTime());
    sound_2.setValue(sound2);
    sound_2.secs=1.5;
    sound_2.setVolume(1.0);
    // keep track of which components have finished
    S2Components = [];
    S2Components.push(sound_2);
    S2Components.push(image_2);
    
    for (const thisComponent of S2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function S2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'S2' ---
    // get current time
    t = S2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_2
    if (t >= 0 && sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2.tStart = t;  // (not accounting for frame time here)
      sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2.play(); });  // screen flip
      sound_2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_2.tStart + 0.5) {
        sound_2.stop();  // stop the sound (if longer than duration)
        sound_2.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
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
    for (const thisComponent of S2Components)
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


function S2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'S2' ---
    for (const thisComponent of S2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('S2.stopped', globalClock.getTime());
    sound_2 = new sound.Sound({
          win: psychoJS.window,
          value: 'A',
          secs: 1.5,
          });
    sound_2.setVolume(1.0);
    sound_2.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intervalComponents;
function intervalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'interval' ---
    t = 0;
    intervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('interval.started', globalClock.getTime());
    // keep track of which components have finished
    intervalComponents = [];
    intervalComponents.push(text_2);
    
    for (const thisComponent of intervalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intervalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'interval' ---
    // get current time
    t = intervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
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
    for (const thisComponent of intervalComponents)
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


function intervalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'interval' ---
    for (const thisComponent of intervalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('interval.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
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
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    instr_4_sound.setVolume(1.0);
    // keep track of which components have finished
    instr_4Components = [];
    instr_4Components.push(instr_4_text);
    instr_4Components.push(key_resp_3);
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
    
    // *instr_4_text* updates
    if (t >= 0.0 && instr_4_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_4_text.tStart = t;  // (not accounting for frame time here)
      instr_4_text.frameNStart = frameN;  // exact frame index
      
      instr_4_text.setAutoDraw(true);
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
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
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


var answerComponents;
function answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'answer' ---
    t = 0;
    answerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('answer.started', globalClock.getTime());
    sound_3.setValue(prompt);
    sound_3.secs=1.5;
    sound_3.setVolume(1.0);
    // keep track of which components have finished
    answerComponents = [];
    answerComponents.push(sound_3);
    answerComponents.push(image_3);
    answerComponents.push(text);
    answerComponents.push(mic);
    answerComponents.push(image_4);
    
    for (const thisComponent of answerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'answer' ---
    // get current time
    t = answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_3
    if (t >= 0 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_3.tStart + 0.5) {
        sound_3.stop();  // stop the sound (if longer than duration)
        sound_3.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
    }
    
    // *text* updates
    if (t >= 1.5 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 1.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    if (t >= 1.5 && mic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mic.tStart = t;  // (not accounting for frame time here)
      mic.frameNStart = frameN;  // exact frame index
      
      await mic.start();
    }
    frameRemains = 1.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mic.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mic.pause();
    }
    
    // *image_4* updates
    if (t >= 1.5 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    frameRemains = 1.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
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
    for (const thisComponent of answerComponents)
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


var thisFilename;
function answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'answer' ---
    for (const thisComponent of answerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('answer.stopped', globalClock.getTime());
    sound_3.stop();  // ensure sound has stopped at end of Routine
    // stop the microphone (make the audio data ready for upload)
    await mic.stop();
    // construct a filename for this recording
    thisFilename = psychoJS.experiment.dataFileName.substring(8) + '_' + 'recording_mic_' + 'block_' + block.thisN + '_' + currentLoop.name + '_' + currentLoop.thisN
    // get the recording
    mic.lastClip = await mic.getRecording({
      tag: thisFilename + '_' + util.MonotonicClock.getDateStr(),
      flush: false
    });
    psychoJS.experiment.addData('mic.clip', thisFilename);
    // start the asynchronous upload to the server
    mic.lastClip.upload();
    sound_3 = new sound.Sound({
          win: psychoJS.window,
          value: 'A',
          secs: 1.5,
          });
    sound_3.setVolume(1.0);
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var recallComponents;
function recallRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall' ---
    t = 0;
    recallClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall.started', globalClock.getTime());
    textbox.setText('');
    textbox.refresh();
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    // keep track of which components have finished
    recallComponents = [];
    recallComponents.push(recall_text);
    recallComponents.push(textbox);
    recallComponents.push(button);
    
    for (const thisComponent of recallComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recallRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall' ---
    // get current time
    t = recallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_text* updates
    if (t >= 0.0 && recall_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_text.tStart = t;  // (not accounting for frame time here)
      recall_text.frameNStart = frameN;  // exact frame index
      
      recall_text.setAutoDraw(true);
    }
    
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }
    
    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          button.numClicks += 1;
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
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
    for (const thisComponent of recallComponents)
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


function recallRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall' ---
    for (const thisComponent of recallComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox.text',textbox.text)
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "recall" was not non-slip safe, so reset the non-slip timer
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
