/******************** 
 * Nback_2Back *
 ********************/


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
flowScheduler.add(instr_4RoutineBegin());
flowScheduler.add(instr_4RoutineEachFrame());
flowScheduler.add(instr_4RoutineEnd());
const prac_block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_block_loopLoopBegin(prac_block_loopLoopScheduler));
flowScheduler.add(prac_block_loopLoopScheduler);
flowScheduler.add(prac_block_loopLoopEnd);








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
    {'name': 'same_example.jpg', 'path': 'same_example.jpg'},
    {'name': 'audio/instr_2.wav', 'path': 'audio/instr_2.wav'},
    {'name': 'different_example.jpg', 'path': 'different_example.jpg'},
    {'name': 'audio/instr_3.wav', 'path': 'audio/instr_3.wav'},
    {'name': 'audio/instr_3_1.wav', 'path': 'audio/instr_3_1.wav'},
    {'name': 'audio/instr_4.wav', 'path': 'audio/instr_4.wav'},
    {'name': 'star.png', 'path': 'star.png'},
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
var instr_4Clock;
var welpage_4;
var instr_key_resp_4;
var instr_4_sound;
var prac_restClock;
var prac_rest_text;
var prac_rest_instr;
var prac_rest_key_resp;
var prac_fixationClock;
var prac_fixation_star;
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
var restClock;
var rest_text;
var rest_instr;
var rest_key_resp;
var fixationClock;
var fixation_star;
var expClock;
var stimu;
var blank;
var key_resp;
var block_fbClock;
var block_feedb_text;
var block_fb_key_resp;
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
    image : 'same_example.jpg', mask : undefined,
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
    image : 'different_example.jpg', mask : undefined,
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
  // Initialize components for Routine "instr_4"
  instr_4Clock = new util.Clock();
  welpage_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welpage_4',
    text: '现在请试一试。\n\n请保持注视屏幕上的“星号”注视点，\n并在看到数字后立即做出反应，\n试着在保证正确的同时尽可能快地回答。\n\n如果您回答错误，继续回答下一题即可。\n记得，回答完之后把手指保持在 z 键和 m 键上。\n\n\n请按空格键继续。\n',
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
  
  // Initialize components for Routine "prac_fixation"
  prac_fixationClock = new util.Clock();
  prac_fixation_star = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_fixation_star', units : undefined, 
    image : 'star.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
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
      secs: 0.5,
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
  
  rest_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_star = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fixation_star', units : undefined, 
    image : 'star.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
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
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    instrComponents.forEach( function(thisComponent) {
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


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    instr_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    instr_2Components.forEach( function(thisComponent) {
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


function instr_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_2' ---
    instr_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    instr_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    instr_3Components.forEach( function(thisComponent) {
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


function instr_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3' ---
    instr_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    instr_3_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    instr_3_1Components.forEach( function(thisComponent) {
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


function instr_3_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3_1' ---
    instr_3_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    instr_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    instr_4Components.forEach( function(thisComponent) {
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


function instr_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_4' ---
    instr_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    prac_block_loop.forEach(function() {
      snapshot = prac_block_loop.getSnapshot();
    
      prac_block_loopLoopScheduler.add(importConditions(snapshot));
      prac_block_loopLoopScheduler.add(prac_restRoutineBegin(snapshot));
      prac_block_loopLoopScheduler.add(prac_restRoutineEachFrame());
      prac_block_loopLoopScheduler.add(prac_restRoutineEnd(snapshot));
      const prac_trials_loopLoopScheduler = new Scheduler(psychoJS);
      prac_block_loopLoopScheduler.add(prac_trials_loopLoopBegin(prac_trials_loopLoopScheduler, snapshot));
      prac_block_loopLoopScheduler.add(prac_trials_loopLoopScheduler);
      prac_block_loopLoopScheduler.add(prac_trials_loopLoopEnd);
      prac_block_loopLoopScheduler.add(prac_block_fbRoutineBegin(snapshot));
      prac_block_loopLoopScheduler.add(prac_block_fbRoutineEachFrame());
      prac_block_loopLoopScheduler.add(prac_block_fbRoutineEnd(snapshot));
      prac_block_loopLoopScheduler.add(prac_block_loopLoopEndIteration(prac_block_loopLoopScheduler, snapshot));
    });
    
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
      nReps: 20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials_loop_zm.xlsx',
      seed: undefined, name: 'prac_trials_loop'
    });
    psychoJS.experiment.addLoop(prac_trials_loop); // add the loop to the experiment
    currentLoop = prac_trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_trials_loop.forEach(function() {
      snapshot = prac_trials_loop.getSnapshot();
    
      prac_trials_loopLoopScheduler.add(importConditions(snapshot));
      prac_trials_loopLoopScheduler.add(prac_fixationRoutineBegin(snapshot));
      prac_trials_loopLoopScheduler.add(prac_fixationRoutineEachFrame());
      prac_trials_loopLoopScheduler.add(prac_fixationRoutineEnd(snapshot));
      prac_trials_loopLoopScheduler.add(prac_expRoutineBegin(snapshot));
      prac_trials_loopLoopScheduler.add(prac_expRoutineEachFrame());
      prac_trials_loopLoopScheduler.add(prac_expRoutineEnd(snapshot));
      prac_trials_loopLoopScheduler.add(prac_trial_fbRoutineBegin(snapshot));
      prac_trials_loopLoopScheduler.add(prac_trial_fbRoutineEachFrame());
      prac_trials_loopLoopScheduler.add(prac_trial_fbRoutineEnd(snapshot));
      prac_trials_loopLoopScheduler.add(prac_trials_loopLoopEndIteration(prac_trials_loopLoopScheduler, snapshot));
    });
    
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
    block_loop.forEach(function() {
      snapshot = block_loop.getSnapshot();
    
      block_loopLoopScheduler.add(importConditions(snapshot));
      block_loopLoopScheduler.add(restRoutineBegin(snapshot));
      block_loopLoopScheduler.add(restRoutineEachFrame());
      block_loopLoopScheduler.add(restRoutineEnd(snapshot));
      const trials_loopLoopScheduler = new Scheduler(psychoJS);
      block_loopLoopScheduler.add(trials_loopLoopBegin(trials_loopLoopScheduler, snapshot));
      block_loopLoopScheduler.add(trials_loopLoopScheduler);
      block_loopLoopScheduler.add(trials_loopLoopEnd);
      block_loopLoopScheduler.add(block_fbRoutineBegin(snapshot));
      block_loopLoopScheduler.add(block_fbRoutineEachFrame());
      block_loopLoopScheduler.add(block_fbRoutineEnd(snapshot));
      block_loopLoopScheduler.add(block_loopLoopEndIteration(block_loopLoopScheduler, snapshot));
    });
    
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
      nReps: 20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials_loop_zm.xlsx',
      seed: undefined, name: 'trials_loop'
    });
    psychoJS.experiment.addLoop(trials_loop); // add the loop to the experiment
    currentLoop = trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_loop.forEach(function() {
      snapshot = trials_loop.getSnapshot();
    
      trials_loopLoopScheduler.add(importConditions(snapshot));
      trials_loopLoopScheduler.add(fixationRoutineBegin(snapshot));
      trials_loopLoopScheduler.add(fixationRoutineEachFrame());
      trials_loopLoopScheduler.add(fixationRoutineEnd(snapshot));
      trials_loopLoopScheduler.add(expRoutineBegin(snapshot));
      trials_loopLoopScheduler.add(expRoutineEachFrame());
      trials_loopLoopScheduler.add(expRoutineEnd(snapshot));
      trials_loopLoopScheduler.add(trials_loopLoopEndIteration(trials_loopLoopScheduler, snapshot));
    });
    
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
    } else {
        prac_rest_text = "\u7ec3\u4e60\u5b9e\u9a8c\u7684\u6b63\u786e\u7387\u9700\u8fbe\u523060%\u624d\u80fd\u8fdb\u5165\u6b63\u5f0f\u5b9e\u9a8c\uff0c\n\n\u6ca1\u5173\u7cfb\uff0c\u518d\u6765\u7ec3\u4e60\u4e00\u6b21\u5427\uff01\n\n\n\u8bf7\u6309\u7a7a\u683c\u952e\u5f00\u59cb\u7ec3\u4e60\u3002";
    }
    
    prac_rest_instr.setText(prac_rest_text);
    prac_rest_key_resp.keys = undefined;
    prac_rest_key_resp.rt = undefined;
    _prac_rest_key_resp_allKeys = [];
    // keep track of which components have finished
    prac_restComponents = [];
    prac_restComponents.push(prac_rest_instr);
    prac_restComponents.push(prac_rest_key_resp);
    
    prac_restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prac_restComponents.forEach( function(thisComponent) {
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


function prac_restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_rest' ---
    prac_restComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    prac_fixationComponents.push(prac_fixation_star);
    
    prac_fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function prac_fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_fixation' ---
    // get current time
    t = prac_fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_fixation_star* updates
    if (t >= 0.0 && prac_fixation_star.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_fixation_star.tStart = t;  // (not accounting for frame time here)
      prac_fixation_star.frameNStart = frameN;  // exact frame index
      
      prac_fixation_star.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_fixation_star.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_fixation_star.setAutoDraw(false);
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
    prac_fixationComponents.forEach( function(thisComponent) {
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


function prac_fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_fixation' ---
    prac_fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    routineTimer.add(1.500000);
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
    
    prac_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prac_stimu.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_stimu.setAutoDraw(false);
    }
    
    // *prac_blank* updates
    if (t >= 0.5 && prac_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_blank.tStart = t;  // (not accounting for frame time here)
      prac_blank.frameNStart = frameN;  // exact frame index
      
      prac_blank.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    
    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    prac_expComponents.forEach( function(thisComponent) {
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


var prac_feedb_audio;
function prac_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_exp' ---
    prac_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('prac_trial_fb.started', globalClock.getTime());
    prac_feedb_text.setText(prac_feedb);
    prac_feedb_sound.setValue(prac_feedb_audio);
    prac_feedb_sound.secs=0.5;
    prac_feedb_sound.setVolume(1.0);
    // keep track of which components have finished
    prac_trial_fbComponents = [];
    prac_trial_fbComponents.push(prac_feedb_text);
    prac_trial_fbComponents.push(prac_feedb_sound);
    
    prac_trial_fbComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    prac_trial_fbComponents.forEach( function(thisComponent) {
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


function prac_trial_fbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_trial_fb' ---
    prac_trial_fbComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    prac_block_fbComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    prac_block_fbComponents.forEach( function(thisComponent) {
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


function prac_block_fbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_block_fb' ---
    prac_block_fbComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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


var _rest_key_resp_allKeys;
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
    if ((block_loop.thisN === 0)) {
        rest_text = "\u505a\u5f97\u597d\uff01\u7ec3\u4e60\u7ed3\u675f\u4e86\u3002\n\n\u8ba9\u6211\u4eec\u5f00\u59cb\u6b63\u5f0f\u5b9e\u9a8c\u5427\u3002\n\u8bf7\u6ce8\u610f\uff0c\u6b63\u5f0f\u5b9e\u9a8c\u4e2d\u4e0d\u518d\u63d0\u4f9b\u6b63\u8bef\u53cd\u9988\u3002\n\n\u8bb0\u5f97\uff0c\u5728\u770b\u5230\u6570\u5b57\u540e\u7acb\u5373\u505a\u51fa\u53cd\u5e94\uff0c\n\u8bd5\u7740\u5728\u4fdd\u8bc1\u6b63\u786e\u7684\u540c\u65f6\u5c3d\u53ef\u80fd\u5feb\u5730\u56de\u7b54\u3002\n\n\n\u8bf7\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u3002";
    } else {
        rest_text = "\u505a\u5f97\u597d\uff01\u4f11\u606f\u4e00\u4e0b\u5427\u3002\n\n\u4f11\u606f\u597d\u540e\uff0c\u8bf7\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u5b9e\u9a8c\u3002\n\n\u540e\u9762\u5b9e\u9a8c\u7684\u8981\u6c42\u4e0e\u4e4b\u524d\u662f\u4e00\u6837\u7684\u3002";
    }
    
    rest_instr.setText(rest_text);
    rest_key_resp.keys = undefined;
    rest_key_resp.rt = undefined;
    _rest_key_resp_allKeys = [];
    // keep track of which components have finished
    restComponents = [];
    restComponents.push(rest_instr);
    restComponents.push(rest_key_resp);
    
    restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


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
    
    
    // *rest_key_resp* updates
    if (t >= 0.0 && rest_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rest_key_resp.tStart = t;  // (not accounting for frame time here)
      rest_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rest_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rest_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rest_key_resp.clearEvents(); });
    }
    
    if (rest_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = rest_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _rest_key_resp_allKeys = _rest_key_resp_allKeys.concat(theseKeys);
      if (_rest_key_resp_allKeys.length > 0) {
        rest_key_resp.keys = _rest_key_resp_allKeys[_rest_key_resp_allKeys.length - 1].name;  // just the last key pressed
        rest_key_resp.rt = _rest_key_resp_allKeys[_rest_key_resp_allKeys.length - 1].rt;
        rest_key_resp.duration = _rest_key_resp_allKeys[_rest_key_resp_allKeys.length - 1].duration;
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
    restComponents.forEach( function(thisComponent) {
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


function restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest' ---
    restComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rest.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(rest_key_resp.corr, level);
    }
    psychoJS.experiment.addData('rest_key_resp.keys', rest_key_resp.keys);
    if (typeof rest_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rest_key_resp.rt', rest_key_resp.rt);
        psychoJS.experiment.addData('rest_key_resp.duration', rest_key_resp.duration);
        routineTimer.reset();
        }
    
    rest_key_resp.stop();
    // the Routine "rest" was not non-slip safe, so reset the non-slip timer
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
    fixationComponents.push(fixation_star);
    
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *fixation_star* updates
    if (t >= 0.0 && fixation_star.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_star.tStart = t;  // (not accounting for frame time here)
      fixation_star.frameNStart = frameN;  // exact frame index
      
      fixation_star.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_star.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_star.setAutoDraw(false);
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
    fixationComponents.forEach( function(thisComponent) {
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


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    routineTimer.add(1.500000);
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
    
    expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimu.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimu.setAutoDraw(false);
    }
    
    // *blank* updates
    if (t >= 0.5 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    
    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    expComponents.forEach( function(thisComponent) {
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


function expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp' ---
    expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    block_fbComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    block_fbComponents.forEach( function(thisComponent) {
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


function block_fbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_fb' ---
    block_fbComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    thanksComponents.forEach( function(thisComponent) {
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


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
