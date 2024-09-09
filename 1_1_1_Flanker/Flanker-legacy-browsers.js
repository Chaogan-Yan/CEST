/**************** 
 * Flanker *
 ****************/


// store info about the experiment session:
let expName = 'Flanker';  // from the Builder filename that created this script
let expInfo = {
    '编号': '',
    '主试ID': '',
};

// Start code blocks for 'Before Experiment'
// for our own functions we need these specified in the global space 
// so these are defined in the "Before experiment" tab
// linspace (this will be used in place of numpy.linspace for picking ISI)


var n;
function linspace(a,b,n) {
    if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
    if(n<2) { return n===1?[a]:[]; }
    var i,ret = Array(n);
    n--;
    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
    return ret;
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
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
const dummy_trialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(dummy_trialLoopBegin(dummy_trialLoopScheduler));
flowScheduler.add(dummy_trialLoopScheduler);
flowScheduler.add(dummy_trialLoopEnd);


flowScheduler.add(JS_codeRoutineBegin());
flowScheduler.add(JS_codeRoutineEachFrame());
flowScheduler.add(JS_codeRoutineEnd());
flowScheduler.add(instruction_1RoutineBegin());
flowScheduler.add(instruction_1RoutineEachFrame());
flowScheduler.add(instruction_1RoutineEnd());
flowScheduler.add(instruction_2RoutineBegin());
flowScheduler.add(instruction_2RoutineEachFrame());
flowScheduler.add(instruction_2RoutineEnd());
flowScheduler.add(instruction_2_1RoutineBegin());
flowScheduler.add(instruction_2_1RoutineEachFrame());
flowScheduler.add(instruction_2_1RoutineEnd());
flowScheduler.add(instruction_2_2RoutineBegin());
flowScheduler.add(instruction_2_2RoutineEachFrame());
flowScheduler.add(instruction_2_2RoutineEnd());
flowScheduler.add(instruction_2_3RoutineBegin());
flowScheduler.add(instruction_2_3RoutineEachFrame());
flowScheduler.add(instruction_2_3RoutineEnd());
flowScheduler.add(instruction_2_4RoutineBegin());
flowScheduler.add(instruction_2_4RoutineEachFrame());
flowScheduler.add(instruction_2_4RoutineEnd());
flowScheduler.add(instruction_2_5RoutineBegin());
flowScheduler.add(instruction_2_5RoutineEachFrame());
flowScheduler.add(instruction_2_5RoutineEnd());
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin(blockLoopScheduler));
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);












flowScheduler.add(Main_Exp_InstructionsRoutineBegin());
flowScheduler.add(Main_Exp_InstructionsRoutineEachFrame());
flowScheduler.add(Main_Exp_InstructionsRoutineEnd());
const test_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_trialsLoopBegin(test_trialsLoopScheduler));
flowScheduler.add(test_trialsLoopScheduler);
flowScheduler.add(test_trialsLoopEnd);








flowScheduler.add(finishRoutineBegin());
flowScheduler.add(finishRoutineEachFrame());
flowScheduler.add(finishRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions_mixed.xlsx', 'path': 'conditions_mixed.xlsx'},
    {'name': 'img/left_arrow.png', 'path': 'img/left_arrow.png'},
    {'name': 'img/right_arrow.png', 'path': 'img/right_arrow.png'},
    {'name': 'img/congruent_left_empty.png', 'path': 'img/congruent_left_empty.png'},
    {'name': 'img/congruent_left.png', 'path': 'img/congruent_left.png'},
    {'name': 'img/congruent_right_empty.png', 'path': 'img/congruent_right_empty.png'},
    {'name': 'img/congruent_right.png', 'path': 'img/congruent_right.png'},
    {'name': 'img/incongruent_right_empty.png', 'path': 'img/incongruent_right_empty.png'},
    {'name': 'img/incongruent_right.png', 'path': 'img/incongruent_right.png'},
    {'name': 'img/incongruent_left_empty.png', 'path': 'img/incongruent_left_empty.png'},
    {'name': 'img/incongruent_left.png', 'path': 'img/incongruent_left.png'},
    {'name': 'conditions_test(13+7).xlsx', 'path': 'conditions_test(13+7).xlsx'},
    {'name': 'PNblock1.xlsx', 'path': 'PNblock1.xlsx'},
    {'name': 'img/left_arrow.png', 'path': 'img/left_arrow.png'},
    {'name': 'img/right_arrow.png', 'path': 'img/right_arrow.png'},
    {'name': 'img/congruent_left_empty.png', 'path': 'img/congruent_left_empty.png'},
    {'name': 'img/congruent_left.png', 'path': 'img/congruent_left.png'},
    {'name': 'img/incongruent_right_empty.png', 'path': 'img/incongruent_right_empty.png'},
    {'name': 'img/incongruent_right.png', 'path': 'img/incongruent_right.png'},
    {'name': 'PNblock2.xlsx', 'path': 'PNblock2.xlsx'},
    {'name': 'img/congruent_right_empty.png', 'path': 'img/congruent_right_empty.png'},
    {'name': 'img/congruent_right.png', 'path': 'img/congruent_right.png'},
    {'name': 'PNblock3.xlsx', 'path': 'PNblock3.xlsx'},
    {'name': 'img/incongruent_left_empty.png', 'path': 'img/incongruent_left_empty.png'},
    {'name': 'img/incongruent_left.png', 'path': 'img/incongruent_left.png'},
    {'name': 'PNblock4.xlsx', 'path': 'PNblock4.xlsx'},
    {'name': 'PNblock5.xlsx', 'path': 'PNblock5.xlsx'},
    {'name': 'PNblock6.xlsx', 'path': 'PNblock6.xlsx'},
    {'name': 'PNblock7.xlsx', 'path': 'PNblock7.xlsx'},
    {'name': 'audio/F-a.wav', 'path': 'audio/F-a.wav'},
    {'name': 'audio/F-b.wav', 'path': 'audio/F-b.wav'},
    {'name': 'audio/F-c.wav', 'path': 'audio/F-c.wav'},
    {'name': 'audio/F-d.wav', 'path': 'audio/F-d.wav'},
    {'name': 'audio/F-e.wav', 'path': 'audio/F-e.wav'},
    {'name': 'img/right_arrow_red.png', 'path': 'img/right_arrow_red.png'},
    {'name': 'img/left_arrow_red.png', 'path': 'img/left_arrow_red.png'},
    {'name': 'audio/F-g.wav', 'path': 'audio/F-g.wav'},
    {'name': 'audio/F1.wav', 'path': 'audio/F1.wav'},
    {'name': 'img/congruent_left.png', 'path': 'img/congruent_left.png'},
    {'name': 'img/left_arrow.png', 'path': 'img/left_arrow.png'},
    {'name': 'img/right_arrow.png', 'path': 'img/right_arrow.png'},
    {'name': 'audio/F3.wav', 'path': 'audio/F3.wav'},
    {'name': 'img/congruent_left_flash.png', 'path': 'img/congruent_left_flash.png'},
    {'name': 'audio/F6.wav', 'path': 'audio/F6.wav'},
    {'name': 'img/left_arrow_border.png', 'path': 'img/left_arrow_border.png'},
    {'name': 'img/congruent_right_flash.png', 'path': 'img/congruent_right_flash.png'},
    {'name': 'audio/F7.wav', 'path': 'audio/F7.wav'},
    {'name': 'img/right_arrow_border.png', 'path': 'img/right_arrow_border.png'},
    {'name': 'img/incongruent_right_flash.png', 'path': 'img/incongruent_right_flash.png'},
    {'name': 'audio/F8.wav', 'path': 'audio/F8.wav'},
    {'name': 'img/incongruent_left_flash.png', 'path': 'img/incongruent_left_flash.png'},
    {'name': 'audio/F9.wav', 'path': 'audio/F9.wav'},
    {'name': 'audio/F10.wav', 'path': 'audio/F10.wav'},
    {'name': 'audio/F11_new.wav', 'path': 'audio/F11_new.wav'},
    {'name': 'img/middle.jpeg', 'path': 'img/middle.jpeg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'audio/F12_new.wav', 'path': 'audio/F12_new.wav'},
    {'name': 'audio/F-f.wav', 'path': 'audio/F-f.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


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
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u4e3b\u8bd5ID"]}_1_1_1_${expName}_${expInfo["\u7f16\u53f7"]}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var dummy_resourcesClock;
var sound_14;
var sound_15;
var sound_16;
var sound_17;
var sound_18;
var image_47;
var image_48;
var sound_23;
var JS_codeClock;
var shuffle;
var instruction_1Clock;
var text_homebase;
var wecomle_resp;
var sound_1;
var instruction_2Clock;
var text;
var image_8;
var image_9;
var image_10;
var sound_2;
var key_resp_10;
var instruction_2_1Clock;
var image_11;
var image_12;
var image_13;
var text_5;
var sound_3;
var image_24;
var key_resp_5;
var instruction_2_2Clock;
var image_14;
var image_15;
var image_16;
var text_6;
var sound_4;
var image_25;
var key_resp_6;
var instruction_2_3Clock;
var image_17;
var image_18;
var image_19;
var text_7;
var sound_5;
var image_23;
var key_resp_7;
var instruction_2_4Clock;
var image_20;
var image_21;
var image_22;
var text_8;
var sound_6;
var image_26;
var key_resp_8;
var instruction_2_5Clock;
var image_27;
var image_29;
var text_9;
var sound_7;
var image_30;
var key_resp_11;
var Instructions_3Clock;
var text_2;
var key_resp_16;
var sound_24;
var inter_trial_intervalClock;
var image_31;
var image_32;
var ISIcodeClock;
var fixationClock;
var fix_1;
var image_33;
var image_34;
var CueClock;
var image_38;
var image_36;
var image_37;
var StimClock;
var image_39;
var image_41;
var image;
var image_2;
var key_resp_2;
var FeedbackClock;
var image_42;
var image_3;
var image_43;
var sound_9;
var UpdateAccuracyClock;
var counterOne;
var counterTwo;
var continueStatusClock;
var isForward;
var text_24;
var key_resp_18;
var sound_10;
var Main_Exp_InstructionsClock;
var text_10;
var key_resp_9;
var sound_13;
var ISIcode_testClock;
var finishClock;
var text_3;
var sound_12;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "dummy_resources"
  dummy_resourcesClock = new util.Clock();
  sound_14 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F-a.wav',
      secs: 1.0,
      });
  sound_14.setVolume(1);
  sound_15 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F-b.wav',
      secs: 1.0,
      });
  sound_15.setVolume(1);
  sound_16 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F-c.wav',
      secs: 1.0,
      });
  sound_16.setVolume(1);
  sound_17 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F-d.wav',
      secs: 1.0,
      });
  sound_17.setVolume(1);
  sound_18 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F-e.wav',
      secs: 1.0,
      });
  sound_18.setVolume(1);
  image_47 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_47', units : undefined, 
    image : 'img/right_arrow_red.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  image_48 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_48', units : undefined, 
    image : 'img/left_arrow_red.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  sound_23 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F-g.wav',
      secs: 1.0,
      });
  sound_23.setVolume(1);
  // Initialize components for Routine "JS_code"
  JS_codeClock = new util.Clock();
  // shuffle is push in JS so defining shuffle for our JS experiment code
  shuffle = util.shuffle;
  // Initialize components for Routine "instruction_1"
  instruction_1Clock = new util.Clock();
  text_homebase = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_homebase',
    text: '欢迎您参加本任务。\n\n在这个任务中，您将会看到一排指向不同方向的箭头，\n\n但首先，让我们先学习一下按键，请把您的左手食指\n\n放在Z键上，并把右手食指放在M键上。\n\n\n\n按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  wecomle_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F1.wav',
      secs: (- 1),
      });
  sound_1.setVolume(1);
  // Initialize components for Routine "instruction_2"
  instruction_2Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '您会看到一排箭头，\n\n您需要按下与“中间”箭头指向方向相同的按键。\n\n按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : 'img/congruent_left.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.38], size : [0.53, 0.53],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : 'img/left_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_10', units : undefined, 
    image : 'img/right_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F3.wav',
      secs: (- 1),
      });
  sound_2.setVolume(1);
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_2_1"
  instruction_2_1Clock = new util.Clock();
  image_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_11', units : undefined, 
    image : 'img/congruent_left_flash.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.38], size : [0.53, 0.53],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_12', units : undefined, 
    image : 'img/left_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_13', units : undefined, 
    image : 'img/right_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '如果中间的箭头指向左方，请选择代表左的按键Z。\n\n\n按Z键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F6.wav',
      secs: (- 1),
      });
  sound_3.setVolume(1);
  image_24 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_24', units : undefined, 
    image : 'img/left_arrow_border.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_2_2"
  instruction_2_2Clock = new util.Clock();
  image_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_14', units : undefined, 
    image : 'img/congruent_right_flash.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.38], size : [0.53, 0.53],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_15', units : undefined, 
    image : 'img/left_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_16 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_16', units : undefined, 
    image : 'img/right_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '如果中间的箭头指向右方，请选择代表右的按键M。\n\n\n按M键继续。',
    font: 'heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  sound_4 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F7.wav',
      secs: (- 1),
      });
  sound_4.setVolume(1);
  image_25 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_25', units : undefined, 
    image : 'img/right_arrow_border.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_2_3"
  instruction_2_3Clock = new util.Clock();
  image_17 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_17', units : undefined, 
    image : 'img/incongruent_right_flash.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.38], size : [0.53, 0.53],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_18 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_18', units : undefined, 
    image : 'img/left_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_19 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_19', units : undefined, 
    image : 'img/right_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '有时候中间箭头的方向会和其他箭头不同，\n\n其他箭头向左，而中间箭头指右。\n\n\n请选择M键。',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  sound_5 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F8.wav',
      secs: (- 1),
      });
  sound_5.setVolume(1);
  image_23 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_23', units : undefined, 
    image : 'img/right_arrow_border.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_2_4"
  instruction_2_4Clock = new util.Clock();
  image_20 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_20', units : undefined, 
    image : 'img/incongruent_left_flash.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.38], size : [0.53, 0.53],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_21 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_21', units : undefined, 
    image : 'img/left_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_22 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_22', units : undefined, 
    image : 'img/right_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '有时候中间的箭头的方向会和其他箭头不同，\n\n其他箭头向右，而中间箭头指左。\n\n\n请选择Z键。',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  sound_6 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F9.wav',
      secs: (- 1),
      });
  sound_6.setVolume(1);
  image_26 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_26', units : undefined, 
    image : 'img/left_arrow_border.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_2_5"
  instruction_2_5Clock = new util.Clock();
  image_27 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_27', units : undefined, 
    image : 'img/incongruent_left_flash.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.38], size : [0.53, 0.53],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_29 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_29', units : undefined, 
    image : 'img/right_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '请一直选择与中间箭头指向方向相同的按钮，\n\n您会看到“中间”这个词来提醒您。\n\n\n按空格键继续。',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  sound_7 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F10.wav',
      secs: (- 1),
      });
  sound_7.setVolume(1);
  image_30 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_30', units : undefined, 
    image : 'img/left_arrow_border.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions_3"
  Instructions_3Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '现在请试一试。\n\n请保持注视屏幕上的“+”注视点。\n试着在保持正确的同时尽可能快地回答。\n\n如果您回答错误，继续回答下一题即可。\n记得，回答完之后把手指放回Z键和M键上。\n\n\n按空格键继续。\n\n',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_24 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F11_new.wav',
      secs: (- 1),
      });
  sound_24.setVolume(1);
  // Initialize components for Routine "inter_trial_interval"
  inter_trial_intervalClock = new util.Clock();
  image_31 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_31', units : undefined, 
    image : 'img/left_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_32 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_32', units : undefined, 
    image : 'img/right_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ISIcode"
  ISIcodeClock = new util.Clock();
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fix_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_1',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_33 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_33', units : undefined, 
    image : 'img/left_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_34 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_34', units : undefined, 
    image : 'img/right_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Cue"
  CueClock = new util.Clock();
  image_38 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_38', units : undefined, 
    image : 'img/middle.jpeg', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.2], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_36 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_36', units : undefined, 
    image : 'img/left_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_37 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_37', units : undefined, 
    image : 'img/right_arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Stim"
  StimClock = new util.Clock();
  image_39 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_39', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_41 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_41', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  image_42 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_42', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_43 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_43', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  sound_9 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_9.setVolume(1.0);
  // Initialize components for Routine "UpdateAccuracy"
  UpdateAccuracyClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  counterOne = 0;
  counterTwo = 0;
  
  // Initialize components for Routine "continueStatus"
  continueStatusClock = new util.Clock();
  // Run 'Begin Experiment' code from code_11
  isForward = 0;
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: '',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_10 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_10.setVolume(1.0);
  // Initialize components for Routine "Main_Exp_Instructions"
  Main_Exp_InstructionsClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '准备好，让我们开始正式实验。\n\n请保持注视屏幕上的“+”注视点。\n试着在保持正确的同时尽可能快地回答。\n\n如果您回答错误，继续回答下一题即可。\n记得，回答完之后把手指放回Z键和M键上。\n\n\n按空格键继续。\n\n',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_13 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F12_new.wav',
      secs: (- 1),
      });
  sound_13.setVolume(1);
  // Initialize components for Routine "ISIcode_test"
  ISIcode_testClock = new util.Clock();
  // Initialize components for Routine "finish"
  finishClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '任务已经全部完成了，感谢您的参与！',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  sound_12 = new sound.Sound({
      win: psychoJS.window,
      value: 'audio/F-f.wav',
      secs: (- 1),
      });
  sound_12.setVolume(1.0);
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var dummy_trial;
function dummy_trialLoopBegin(dummy_trialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    dummy_trial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 0, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'dummy_trial'
    });
    psychoJS.experiment.addLoop(dummy_trial); // add the loop to the experiment
    currentLoop = dummy_trial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    dummy_trial.forEach(function() {
      snapshot = dummy_trial.getSnapshot();
    
      dummy_trialLoopScheduler.add(importConditions(snapshot));
      dummy_trialLoopScheduler.add(dummy_resourcesRoutineBegin(snapshot));
      dummy_trialLoopScheduler.add(dummy_resourcesRoutineEachFrame());
      dummy_trialLoopScheduler.add(dummy_resourcesRoutineEnd(snapshot));
      dummy_trialLoopScheduler.add(dummy_trialLoopEndIteration(dummy_trialLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function dummy_trialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(dummy_trial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function dummy_trialLoopEndIteration(scheduler, snapshot) {
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


var block;
function blockLoopBegin(blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'block'
    });
    psychoJS.experiment.addLoop(block); // add the loop to the experiment
    currentLoop = block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block.forEach(function() {
      snapshot = block.getSnapshot();
    
      blockLoopScheduler.add(importConditions(snapshot));
      blockLoopScheduler.add(Instructions_3RoutineBegin(snapshot));
      blockLoopScheduler.add(Instructions_3RoutineEachFrame());
      blockLoopScheduler.add(Instructions_3RoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blockLoopScheduler.add(trialsLoopScheduler);
      blockLoopScheduler.add(trialsLoopEnd);
      blockLoopScheduler.add(continueStatusRoutineBegin(snapshot));
      blockLoopScheduler.add(continueStatusRoutineEachFrame());
      blockLoopScheduler.add(continueStatusRoutineEnd(snapshot));
      blockLoopScheduler.add(blockLoopEndIteration(blockLoopScheduler, snapshot));
    });
    
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
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_mixed.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(inter_trial_intervalRoutineBegin(snapshot));
      trialsLoopScheduler.add(inter_trial_intervalRoutineEachFrame());
      trialsLoopScheduler.add(inter_trial_intervalRoutineEnd(snapshot));
      trialsLoopScheduler.add(ISIcodeRoutineBegin(snapshot));
      trialsLoopScheduler.add(ISIcodeRoutineEachFrame());
      trialsLoopScheduler.add(ISIcodeRoutineEnd(snapshot));
      trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixationRoutineEachFrame());
      trialsLoopScheduler.add(fixationRoutineEnd(snapshot));
      trialsLoopScheduler.add(CueRoutineBegin(snapshot));
      trialsLoopScheduler.add(CueRoutineEachFrame());
      trialsLoopScheduler.add(CueRoutineEnd(snapshot));
      trialsLoopScheduler.add(StimRoutineBegin(snapshot));
      trialsLoopScheduler.add(StimRoutineEachFrame());
      trialsLoopScheduler.add(StimRoutineEnd(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineEachFrame());
      trialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(UpdateAccuracyRoutineBegin(snapshot));
      trialsLoopScheduler.add(UpdateAccuracyRoutineEachFrame());
      trialsLoopScheduler.add(UpdateAccuracyRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
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


var test_trials;
function test_trialsLoopBegin(test_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_test(13+7).xlsx',
      seed: undefined, name: 'test_trials'
    });
    psychoJS.experiment.addLoop(test_trials); // add the loop to the experiment
    currentLoop = test_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    test_trials.forEach(function() {
      snapshot = test_trials.getSnapshot();
    
      test_trialsLoopScheduler.add(importConditions(snapshot));
      const blocknLoopScheduler = new Scheduler(psychoJS);
      test_trialsLoopScheduler.add(blocknLoopBegin(blocknLoopScheduler, snapshot));
      test_trialsLoopScheduler.add(blocknLoopScheduler);
      test_trialsLoopScheduler.add(blocknLoopEnd);
      test_trialsLoopScheduler.add(test_trialsLoopEndIteration(test_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var blockn;
function blocknLoopBegin(blocknLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blockn = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: blockfile,
      seed: undefined, name: 'blockn'
    });
    psychoJS.experiment.addLoop(blockn); // add the loop to the experiment
    currentLoop = blockn;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blockn.forEach(function() {
      snapshot = blockn.getSnapshot();
    
      blocknLoopScheduler.add(importConditions(snapshot));
      blocknLoopScheduler.add(inter_trial_intervalRoutineBegin(snapshot));
      blocknLoopScheduler.add(inter_trial_intervalRoutineEachFrame());
      blocknLoopScheduler.add(inter_trial_intervalRoutineEnd(snapshot));
      blocknLoopScheduler.add(ISIcode_testRoutineBegin(snapshot));
      blocknLoopScheduler.add(ISIcode_testRoutineEachFrame());
      blocknLoopScheduler.add(ISIcode_testRoutineEnd(snapshot));
      blocknLoopScheduler.add(fixationRoutineBegin(snapshot));
      blocknLoopScheduler.add(fixationRoutineEachFrame());
      blocknLoopScheduler.add(fixationRoutineEnd(snapshot));
      blocknLoopScheduler.add(CueRoutineBegin(snapshot));
      blocknLoopScheduler.add(CueRoutineEachFrame());
      blocknLoopScheduler.add(CueRoutineEnd(snapshot));
      blocknLoopScheduler.add(StimRoutineBegin(snapshot));
      blocknLoopScheduler.add(StimRoutineEachFrame());
      blocknLoopScheduler.add(StimRoutineEnd(snapshot));
      blocknLoopScheduler.add(blocknLoopEndIteration(blocknLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function blocknLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blockn);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocknLoopEndIteration(scheduler, snapshot) {
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


async function test_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_trialsLoopEndIteration(scheduler, snapshot) {
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


var t;
var frameN;
var continueRoutine;
var dummy_resourcesComponents;
function dummy_resourcesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'dummy_resources' ---
    t = 0;
    dummy_resourcesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('dummy_resources.started', globalClock.getTime());
    sound_14.secs=1.0;
    sound_14.setVolume(1);
    sound_15.secs=1.0;
    sound_15.setVolume(1);
    sound_16.secs=1.0;
    sound_16.setVolume(1);
    sound_17.secs=1.0;
    sound_17.setVolume(1);
    sound_18.secs=1.0;
    sound_18.setVolume(1);
    sound_23.secs=1.0;
    sound_23.setVolume(1);
    // keep track of which components have finished
    dummy_resourcesComponents = [];
    dummy_resourcesComponents.push(sound_14);
    dummy_resourcesComponents.push(sound_15);
    dummy_resourcesComponents.push(sound_16);
    dummy_resourcesComponents.push(sound_17);
    dummy_resourcesComponents.push(sound_18);
    dummy_resourcesComponents.push(image_47);
    dummy_resourcesComponents.push(image_48);
    dummy_resourcesComponents.push(sound_23);
    
    dummy_resourcesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function dummy_resourcesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'dummy_resources' ---
    // get current time
    t = dummy_resourcesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_14
    if (t >= 0.0 && sound_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_14.tStart = t;  // (not accounting for frame time here)
      sound_14.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_14.play(); });  // screen flip
      sound_14.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_14.tStart + 0.5) {
        sound_14.stop();  // stop the sound (if longer than duration)
        sound_14.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_15
    if (t >= 0.0 && sound_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_15.tStart = t;  // (not accounting for frame time here)
      sound_15.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_15.play(); });  // screen flip
      sound_15.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_15.tStart + 0.5) {
        sound_15.stop();  // stop the sound (if longer than duration)
        sound_15.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_16
    if (t >= 0.0 && sound_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_16.tStart = t;  // (not accounting for frame time here)
      sound_16.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_16.play(); });  // screen flip
      sound_16.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_16.tStart + 0.5) {
        sound_16.stop();  // stop the sound (if longer than duration)
        sound_16.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_17
    if (t >= 0.0 && sound_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_17.tStart = t;  // (not accounting for frame time here)
      sound_17.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_17.play(); });  // screen flip
      sound_17.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_17.tStart + 0.5) {
        sound_17.stop();  // stop the sound (if longer than duration)
        sound_17.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_18
    if (t >= 0.0 && sound_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_18.tStart = t;  // (not accounting for frame time here)
      sound_18.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_18.play(); });  // screen flip
      sound_18.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_18.tStart + 0.5) {
        sound_18.stop();  // stop the sound (if longer than duration)
        sound_18.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_47* updates
    if (t >= 0.0 && image_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_47.tStart = t;  // (not accounting for frame time here)
      image_47.frameNStart = frameN;  // exact frame index
      
      image_47.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_47.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_47.setAutoDraw(false);
    }
    
    // *image_48* updates
    if (t >= 0.0 && image_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_48.tStart = t;  // (not accounting for frame time here)
      image_48.frameNStart = frameN;  // exact frame index
      
      image_48.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_48.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_48.setAutoDraw(false);
    }
    // start/stop sound_23
    if (t >= 0.0 && sound_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_23.tStart = t;  // (not accounting for frame time here)
      sound_23.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_23.play(); });  // screen flip
      sound_23.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_23.tStart + 0.5) {
        sound_23.stop();  // stop the sound (if longer than duration)
        sound_23.status = PsychoJS.Status.FINISHED;
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
    dummy_resourcesComponents.forEach( function(thisComponent) {
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


function dummy_resourcesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'dummy_resources' ---
    dummy_resourcesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('dummy_resources.stopped', globalClock.getTime());
    sound_14.stop();  // ensure sound has stopped at end of Routine
    sound_15.stop();  // ensure sound has stopped at end of Routine
    sound_16.stop();  // ensure sound has stopped at end of Routine
    sound_17.stop();  // ensure sound has stopped at end of Routine
    sound_18.stop();  // ensure sound has stopped at end of Routine
    sound_23.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var JS_codeComponents;
function JS_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'JS_code' ---
    t = 0;
    JS_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('JS_code.started', globalClock.getTime());
    // keep track of which components have finished
    JS_codeComponents = [];
    
    JS_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function JS_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'JS_code' ---
    // get current time
    t = JS_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    JS_codeComponents.forEach( function(thisComponent) {
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


function JS_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'JS_code' ---
    JS_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('JS_code.stopped', globalClock.getTime());
    // the Routine "JS_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _wecomle_resp_allKeys;
var instruction_1Components;
function instruction_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_1' ---
    t = 0;
    instruction_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction_1.started', globalClock.getTime());
    wecomle_resp.keys = undefined;
    wecomle_resp.rt = undefined;
    _wecomle_resp_allKeys = [];
    sound_1.secs=30;
    sound_1.setVolume(1);
    // keep track of which components have finished
    instruction_1Components = [];
    instruction_1Components.push(text_homebase);
    instruction_1Components.push(wecomle_resp);
    instruction_1Components.push(sound_1);
    
    instruction_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_1' ---
    // get current time
    t = instruction_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_homebase* updates
    if (t >= 0.0 && text_homebase.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_homebase.tStart = t;  // (not accounting for frame time here)
      text_homebase.frameNStart = frameN;  // exact frame index
      
      text_homebase.setAutoDraw(true);
    }
    
    
    // *wecomle_resp* updates
    if (t >= 0.0 && wecomle_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wecomle_resp.tStart = t;  // (not accounting for frame time here)
      wecomle_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { wecomle_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { wecomle_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { wecomle_resp.clearEvents(); });
    }
    
    if (wecomle_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = wecomle_resp.getKeys({keyList: ['space'], waitRelease: false});
      _wecomle_resp_allKeys = _wecomle_resp_allKeys.concat(theseKeys);
      if (_wecomle_resp_allKeys.length > 0) {
        wecomle_resp.keys = _wecomle_resp_allKeys[_wecomle_resp_allKeys.length - 1].name;  // just the last key pressed
        wecomle_resp.rt = _wecomle_resp_allKeys[_wecomle_resp_allKeys.length - 1].rt;
        wecomle_resp.duration = _wecomle_resp_allKeys[_wecomle_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_1
    if (t >= 0.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      sound_1.play();  // start the sound (it finishes automatically)
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    instruction_1Components.forEach( function(thisComponent) {
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


function instruction_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_1' ---
    instruction_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_1.stopped', globalClock.getTime());
    wecomle_resp.stop();
    sound_1.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instruction_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_10_allKeys;
var instruction_2Components;
function instruction_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2' ---
    t = 0;
    instruction_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction_2.started', globalClock.getTime());
    sound_2.secs=30;
    sound_2.setVolume(1);
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    instruction_2Components = [];
    instruction_2Components.push(text);
    instruction_2Components.push(image_8);
    instruction_2Components.push(image_9);
    instruction_2Components.push(image_10);
    instruction_2Components.push(sound_2);
    instruction_2Components.push(key_resp_10);
    
    instruction_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2' ---
    // get current time
    t = instruction_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *image_8* updates
    if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }
    
    
    // *image_9* updates
    if (t >= 0.0 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }
    
    
    // *image_10* updates
    if (t >= 0.0 && image_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_10.tStart = t;  // (not accounting for frame time here)
      image_10.frameNStart = frameN;  // exact frame index
      
      image_10.setAutoDraw(true);
    }
    
    // start/stop sound_2
    if (t >= 0.0 && sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2.tStart = t;  // (not accounting for frame time here)
      sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2.play(); });  // screen flip
      sound_2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_2.tStart + 0.5) {
        sound_2.stop();  // stop the sound (if longer than duration)
        sound_2.status = PsychoJS.Status.FINISHED;
      }
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
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
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
    instruction_2Components.forEach( function(thisComponent) {
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


function instruction_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2' ---
    instruction_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_2.stopped', globalClock.getTime());
    sound_2.stop();  // ensure sound has stopped at end of Routine
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
    // the Routine "instruction_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var instruction_2_1Components;
function instruction_2_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2_1' ---
    t = 0;
    instruction_2_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction_2_1.started', globalClock.getTime());
    sound_3.secs=20;
    sound_3.setVolume(1);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    instruction_2_1Components = [];
    instruction_2_1Components.push(image_11);
    instruction_2_1Components.push(image_12);
    instruction_2_1Components.push(image_13);
    instruction_2_1Components.push(text_5);
    instruction_2_1Components.push(sound_3);
    instruction_2_1Components.push(image_24);
    instruction_2_1Components.push(key_resp_5);
    
    instruction_2_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_2_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2_1' ---
    // get current time
    t = instruction_2_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_11* updates
    if (t >= 0.0 && image_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_11.tStart = t;  // (not accounting for frame time here)
      image_11.frameNStart = frameN;  // exact frame index
      
      image_11.setAutoDraw(true);
    }
    
    
    // *image_12* updates
    if (t >= 0.0 && image_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_12.tStart = t;  // (not accounting for frame time here)
      image_12.frameNStart = frameN;  // exact frame index
      
      image_12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_12.setAutoDraw(false);
    }
    
    // *image_13* updates
    if (t >= 0.0 && image_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_13.tStart = t;  // (not accounting for frame time here)
      image_13.frameNStart = frameN;  // exact frame index
      
      image_13.setAutoDraw(true);
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    // start/stop sound_3
    if (t >= 0.0 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_3.tStart + 0.5) {
        sound_3.stop();  // stop the sound (if longer than duration)
        sound_3.status = PsychoJS.Status.FINISHED;
      }
    }
    
    if (image_24.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_24.setOpacity(Math.sin((t * 10)), false);
    }
    
    // *image_24* updates
    if (t >= 2 && image_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_24.tStart = t;  // (not accounting for frame time here)
      image_24.frameNStart = frameN;  // exact frame index
      
      image_24.setAutoDraw(true);
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
      let theseKeys = key_resp_5.getKeys({keyList: ['z'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
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
    instruction_2_1Components.forEach( function(thisComponent) {
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


function instruction_2_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2_1' ---
    instruction_2_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_2_1.stopped', globalClock.getTime());
    sound_3.stop();  // ensure sound has stopped at end of Routine
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
    // the Routine "instruction_2_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var instruction_2_2Components;
function instruction_2_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2_2' ---
    t = 0;
    instruction_2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction_2_2.started', globalClock.getTime());
    sound_4.secs=20;
    sound_4.setVolume(1);
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    instruction_2_2Components = [];
    instruction_2_2Components.push(image_14);
    instruction_2_2Components.push(image_15);
    instruction_2_2Components.push(image_16);
    instruction_2_2Components.push(text_6);
    instruction_2_2Components.push(sound_4);
    instruction_2_2Components.push(image_25);
    instruction_2_2Components.push(key_resp_6);
    
    instruction_2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_2_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2_2' ---
    // get current time
    t = instruction_2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_14* updates
    if (t >= 0.0 && image_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_14.tStart = t;  // (not accounting for frame time here)
      image_14.frameNStart = frameN;  // exact frame index
      
      image_14.setAutoDraw(true);
    }
    
    
    // *image_15* updates
    if (t >= 0.0 && image_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_15.tStart = t;  // (not accounting for frame time here)
      image_15.frameNStart = frameN;  // exact frame index
      
      image_15.setAutoDraw(true);
    }
    
    
    // *image_16* updates
    if (t >= 0.0 && image_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_16.tStart = t;  // (not accounting for frame time here)
      image_16.frameNStart = frameN;  // exact frame index
      
      image_16.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_16.setAutoDraw(false);
    }
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    // start/stop sound_4
    if (t >= 0.0 && sound_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_4.tStart = t;  // (not accounting for frame time here)
      sound_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_4.play(); });  // screen flip
      sound_4.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_4.tStart + 0.5) {
        sound_4.stop();  // stop the sound (if longer than duration)
        sound_4.status = PsychoJS.Status.FINISHED;
      }
    }
    
    if (image_25.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_25.setOpacity(Math.sin((t * 10)), false);
    }
    
    // *image_25* updates
    if (t >= 2 && image_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_25.tStart = t;  // (not accounting for frame time here)
      image_25.frameNStart = frameN;  // exact frame index
      
      image_25.setAutoDraw(true);
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
      let theseKeys = key_resp_6.getKeys({keyList: ['m'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
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
    instruction_2_2Components.forEach( function(thisComponent) {
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


function instruction_2_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2_2' ---
    instruction_2_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_2_2.stopped', globalClock.getTime());
    sound_4.stop();  // ensure sound has stopped at end of Routine
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
    // the Routine "instruction_2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_7_allKeys;
var instruction_2_3Components;
function instruction_2_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2_3' ---
    t = 0;
    instruction_2_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction_2_3.started', globalClock.getTime());
    sound_5.secs=30;
    sound_5.setVolume(1);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    instruction_2_3Components = [];
    instruction_2_3Components.push(image_17);
    instruction_2_3Components.push(image_18);
    instruction_2_3Components.push(image_19);
    instruction_2_3Components.push(text_7);
    instruction_2_3Components.push(sound_5);
    instruction_2_3Components.push(image_23);
    instruction_2_3Components.push(key_resp_7);
    
    instruction_2_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_2_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2_3' ---
    // get current time
    t = instruction_2_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_17* updates
    if (t >= 0.0 && image_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_17.tStart = t;  // (not accounting for frame time here)
      image_17.frameNStart = frameN;  // exact frame index
      
      image_17.setAutoDraw(true);
    }
    
    
    // *image_18* updates
    if (t >= 0.0 && image_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_18.tStart = t;  // (not accounting for frame time here)
      image_18.frameNStart = frameN;  // exact frame index
      
      image_18.setAutoDraw(true);
    }
    
    
    // *image_19* updates
    if (t >= 0.0 && image_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_19.tStart = t;  // (not accounting for frame time here)
      image_19.frameNStart = frameN;  // exact frame index
      
      image_19.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_19.setAutoDraw(false);
    }
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    // start/stop sound_5
    if (t >= 0.0 && sound_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_5.tStart = t;  // (not accounting for frame time here)
      sound_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_5.play(); });  // screen flip
      sound_5.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_5.tStart + 0.5) {
        sound_5.stop();  // stop the sound (if longer than duration)
        sound_5.status = PsychoJS.Status.FINISHED;
      }
    }
    
    if (image_23.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_23.setOpacity(Math.sin((t * 10)), false);
    }
    
    // *image_23* updates
    if (t >= 5 && image_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_23.tStart = t;  // (not accounting for frame time here)
      image_23.frameNStart = frameN;  // exact frame index
      
      image_23.setAutoDraw(true);
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
      let theseKeys = key_resp_7.getKeys({keyList: ['m'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
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
    instruction_2_3Components.forEach( function(thisComponent) {
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


function instruction_2_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2_3' ---
    instruction_2_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_2_3.stopped', globalClock.getTime());
    sound_5.stop();  // ensure sound has stopped at end of Routine
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
    // the Routine "instruction_2_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var instruction_2_4Components;
function instruction_2_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2_4' ---
    t = 0;
    instruction_2_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction_2_4.started', globalClock.getTime());
    sound_6.secs=30;
    sound_6.setVolume(1);
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    instruction_2_4Components = [];
    instruction_2_4Components.push(image_20);
    instruction_2_4Components.push(image_21);
    instruction_2_4Components.push(image_22);
    instruction_2_4Components.push(text_8);
    instruction_2_4Components.push(sound_6);
    instruction_2_4Components.push(image_26);
    instruction_2_4Components.push(key_resp_8);
    
    instruction_2_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_2_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2_4' ---
    // get current time
    t = instruction_2_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_20* updates
    if (t >= 0.0 && image_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_20.tStart = t;  // (not accounting for frame time here)
      image_20.frameNStart = frameN;  // exact frame index
      
      image_20.setAutoDraw(true);
    }
    
    
    // *image_21* updates
    if (t >= 0.0 && image_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_21.tStart = t;  // (not accounting for frame time here)
      image_21.frameNStart = frameN;  // exact frame index
      
      image_21.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_21.setAutoDraw(false);
    }
    
    // *image_22* updates
    if (t >= 0.0 && image_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_22.tStart = t;  // (not accounting for frame time here)
      image_22.frameNStart = frameN;  // exact frame index
      
      image_22.setAutoDraw(true);
    }
    
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    // start/stop sound_6
    if (t >= 0.0 && sound_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_6.tStart = t;  // (not accounting for frame time here)
      sound_6.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_6.play(); });  // screen flip
      sound_6.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_6.tStart + 0.5) {
        sound_6.stop();  // stop the sound (if longer than duration)
        sound_6.status = PsychoJS.Status.FINISHED;
      }
    }
    
    if (image_26.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_26.setOpacity(Math.sin((t * 10)), false);
    }
    
    // *image_26* updates
    if (t >= 5 && image_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_26.tStart = t;  // (not accounting for frame time here)
      image_26.frameNStart = frameN;  // exact frame index
      
      image_26.setAutoDraw(true);
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
      let theseKeys = key_resp_8.getKeys({keyList: ['z'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
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
    instruction_2_4Components.forEach( function(thisComponent) {
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


function instruction_2_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2_4' ---
    instruction_2_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_2_4.stopped', globalClock.getTime());
    sound_6.stop();  // ensure sound has stopped at end of Routine
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
    // the Routine "instruction_2_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_11_allKeys;
var instruction_2_5Components;
function instruction_2_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2_5' ---
    t = 0;
    instruction_2_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction_2_5.started', globalClock.getTime());
    sound_7.secs=30;
    sound_7.setVolume(1);
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    instruction_2_5Components = [];
    instruction_2_5Components.push(image_27);
    instruction_2_5Components.push(image_29);
    instruction_2_5Components.push(text_9);
    instruction_2_5Components.push(sound_7);
    instruction_2_5Components.push(image_30);
    instruction_2_5Components.push(key_resp_11);
    
    instruction_2_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_2_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2_5' ---
    // get current time
    t = instruction_2_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_27* updates
    if (t >= 0.0 && image_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_27.tStart = t;  // (not accounting for frame time here)
      image_27.frameNStart = frameN;  // exact frame index
      
      image_27.setAutoDraw(true);
    }
    
    
    // *image_29* updates
    if (t >= 0.0 && image_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_29.tStart = t;  // (not accounting for frame time here)
      image_29.frameNStart = frameN;  // exact frame index
      
      image_29.setAutoDraw(true);
    }
    
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    // start/stop sound_7
    if (t >= 0.0 && sound_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_7.tStart = t;  // (not accounting for frame time here)
      sound_7.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_7.play(); });  // screen flip
      sound_7.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_7.tStart + 0.5) {
        sound_7.stop();  // stop the sound (if longer than duration)
        sound_7.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *image_30* updates
    if (t >= 0 && image_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_30.tStart = t;  // (not accounting for frame time here)
      image_30.frameNStart = frameN;  // exact frame index
      
      image_30.setAutoDraw(true);
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
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction_2_5Components.forEach( function(thisComponent) {
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


function instruction_2_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2_5' ---
    instruction_2_5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_2_5.stopped', globalClock.getTime());
    sound_7.stop();  // ensure sound has stopped at end of Routine
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
    // the Routine "instruction_2_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_16_allKeys;
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
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    sound_24.secs=40;
    sound_24.setVolume(1);
    // keep track of which components have finished
    Instructions_3Components = [];
    Instructions_3Components.push(text_2);
    Instructions_3Components.push(key_resp_16);
    Instructions_3Components.push(sound_24);
    
    Instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *key_resp_16* updates
    if (t >= 0.0 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
    }
    
    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        key_resp_16.duration = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_24
    if (t >= 0.0 && sound_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_24.tStart = t;  // (not accounting for frame time here)
      sound_24.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_24.play(); });  // screen flip
      sound_24.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 40 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_24.tStart + 0.5) {
        sound_24.stop();  // stop the sound (if longer than duration)
        sound_24.status = PsychoJS.Status.FINISHED;
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
    Instructions_3Components.forEach( function(thisComponent) {
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


function Instructions_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_3' ---
    Instructions_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_16.corr, level);
    }
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
        psychoJS.experiment.addData('key_resp_16.duration', key_resp_16.duration);
        routineTimer.reset();
        }
    
    key_resp_16.stop();
    sound_24.stop();  // ensure sound has stopped at end of Routine
    // the Routine "Instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var inter_trial_intervalComponents;
function inter_trial_intervalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inter_trial_interval' ---
    t = 0;
    inter_trial_intervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('inter_trial_interval.started', globalClock.getTime());
    // keep track of which components have finished
    inter_trial_intervalComponents = [];
    inter_trial_intervalComponents.push(image_31);
    inter_trial_intervalComponents.push(image_32);
    
    inter_trial_intervalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function inter_trial_intervalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inter_trial_interval' ---
    // get current time
    t = inter_trial_intervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_31* updates
    if (t >= 0.0 && image_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_31.tStart = t;  // (not accounting for frame time here)
      image_31.frameNStart = frameN;  // exact frame index
      
      image_31.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_31.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_31.setAutoDraw(false);
    }
    
    // *image_32* updates
    if (t >= 0.0 && image_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_32.tStart = t;  // (not accounting for frame time here)
      image_32.frameNStart = frameN;  // exact frame index
      
      image_32.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_32.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_32.setAutoDraw(false);
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
    inter_trial_intervalComponents.forEach( function(thisComponent) {
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


function inter_trial_intervalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inter_trial_interval' ---
    inter_trial_intervalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('inter_trial_interval.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ISIcodeComponents;
function ISIcodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ISIcode' ---
    t = 0;
    ISIcodeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ISIcode.started', globalClock.getTime());
    // keep track of which components have finished
    ISIcodeComponents = [];
    
    ISIcodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ISIcodeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ISIcode' ---
    // get current time
    t = ISIcodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ISIcodeComponents.forEach( function(thisComponent) {
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


var ISIRange;
var thisISI;
var thistype;
function ISIcodeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ISIcode' ---
    ISIcodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ISIcode.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_10
    ISIRange = linspace(1000, 1500, 500);
    shuffle(ISIRange);
    thisISI = (ISIRange[0] / 1000);
    console.log("thisISI: ", thisISI);
    trials.addData("ISI", thisISI);
    thistype = 'exercise';
    trials.addData('type', thistype)
    // the Routine "ISIcode" was not non-slip safe, so reset the non-slip timer
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
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fix_1);
    fixationComponents.push(image_33);
    fixationComponents.push(image_34);
    
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
    
    // *fix_1* updates
    if (t >= 0.0 && fix_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_1.tStart = t;  // (not accounting for frame time here)
      fix_1.frameNStart = frameN;  // exact frame index
      
      fix_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_1.setAutoDraw(false);
    }
    
    // *image_33* updates
    if (t >= 0.0 && image_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_33.tStart = t;  // (not accounting for frame time here)
      image_33.frameNStart = frameN;  // exact frame index
      
      image_33.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_33.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_33.setAutoDraw(false);
    }
    
    // *image_34* updates
    if (t >= 0.0 && image_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_34.tStart = t;  // (not accounting for frame time here)
      image_34.frameNStart = frameN;  // exact frame index
      
      image_34.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_34.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_34.setAutoDraw(false);
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
    if (continueRoutine) {
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
    // the Routine "fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CueComponents;
function CueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Cue' ---
    t = 0;
    CueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Cue.started', globalClock.getTime());
    // keep track of which components have finished
    CueComponents = [];
    CueComponents.push(image_38);
    CueComponents.push(image_36);
    CueComponents.push(image_37);
    
    CueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Cue' ---
    // get current time
    t = CueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_38* updates
    if (t >= 0.0 && image_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_38.tStart = t;  // (not accounting for frame time here)
      image_38.frameNStart = frameN;  // exact frame index
      
      image_38.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_38.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_38.setAutoDraw(false);
    }
    
    // *image_36* updates
    if (t >= 0.0 && image_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_36.tStart = t;  // (not accounting for frame time here)
      image_36.frameNStart = frameN;  // exact frame index
      
      image_36.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_36.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_36.setAutoDraw(false);
    }
    
    // *image_37* updates
    if (t >= 0.0 && image_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_37.tStart = t;  // (not accounting for frame time here)
      image_37.frameNStart = frameN;  // exact frame index
      
      image_37.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_37.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_37.setAutoDraw(false);
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
    CueComponents.forEach( function(thisComponent) {
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


function CueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Cue' ---
    CueComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Cue.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var StimComponents;
function StimRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Stim' ---
    t = 0;
    StimClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Stim.started', globalClock.getTime());
    image_39.setOpacity(1);
    image_39.setPos([0, 0.2]);
    image_39.setSize([0.5, 0.5]);
    image_39.setOri(0);
    image_39.setImage(empty);
    image_41.setOpacity(1);
    image_41.setPos([0, 0.2]);
    image_41.setSize([0.5, 0.5]);
    image_41.setOri(0);
    image_41.setImage(middle);
    image.setOpacity(1);
    image.setPos([(- 0.4), (- 0.2)]);
    image.setSize([0.15, 0.15]);
    image.setOri(0);
    image.setImage(left_arrow);
    image_2.setOpacity(1);
    image_2.setPos([0.4, (- 0.2)]);
    image_2.setSize([0.15, 0.15]);
    image_2.setOri(0);
    image_2.setImage(right_arrow);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    StimComponents = [];
    StimComponents.push(image_39);
    StimComponents.push(image_41);
    StimComponents.push(image);
    StimComponents.push(image_2);
    StimComponents.push(key_resp_2);
    
    StimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function StimRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Stim' ---
    // get current time
    t = StimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_39* updates
    if (t >= 0 && image_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_39.tStart = t;  // (not accounting for frame time here)
      image_39.frameNStart = frameN;  // exact frame index
      
      image_39.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_39.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_39.setAutoDraw(false);
    }
    
    // *image_41* updates
    if (t >= 0.1 && image_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_41.tStart = t;  // (not accounting for frame time here)
      image_41.frameNStart = frameN;  // exact frame index
      
      image_41.setAutoDraw(true);
    }
    
    frameRemains = 0.1 + 9.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_41.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_41.setAutoDraw(false);
    }
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
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
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['z', 'm', 'None'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[0].name;  // just the first key pressed
        key_resp_2.rt = _key_resp_2_allKeys[0].rt;
        key_resp_2.duration = _key_resp_2_allKeys[0].duration;
        // was this correct?
        if (key_resp_2.keys == corrAns) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
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
    StimComponents.forEach( function(thisComponent) {
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


function StimRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Stim' ---
    StimComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Stim.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var left;
var right;
var audio;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    if (key_resp_2.keys) {
        if ((key_resp_2.keys[0] === "z")) {
            if (key_resp_2.corr) {
                left = "img/left_arrow_border.png";
                right = "img/right_arrow.png";
                audio = "audio/F-b.wav";
            } else {
                left = "img/left_arrow.png";
                right = "img/right_arrow_red.png";
                audio = "audio/F-a.wav";
            }
        } else {
            if ((key_resp_2.keys[0] === "m")) {
                if (key_resp_2.corr) {
                    right = "img/right_arrow_border.png";
                    left = "img/left_arrow.png";
                    audio = "audio/F-b.wav";
                } else {
                    left = "img/left_arrow_red.png";
                    right = "img/right_arrow.png";
                    audio = "audio/F-a.wav";
                }
            }
        }
    } else {
        if ((corrAns === "m")) {
            left = "img/left_arrow.png";
            right = "img/right_arrow_red.png";
            audio = "audio/F-a.wav";
        } else {
            right = "img/right_arrow.png";
            left = "img/left_arrow_red.png";
            audio = "audio/F-a.wav";
        }
    }
    
    image_42.setOpacity(1);
    image_42.setPos([0, 0.2]);
    image_42.setSize([0.5, 0.5]);
    image_42.setOri(0);
    image_42.setImage(middle);
    image_3.setOpacity(1);
    image_3.setPos([(- 0.4), (- 0.2)]);
    image_3.setSize([0.15, 0.15]);
    image_3.setOri(0);
    image_3.setImage(left);
    image_43.setOpacity(1);
    image_43.setPos([0.4, (- 0.2)]);
    image_43.setSize([0.15, 0.15]);
    image_43.setOri(0);
    image_43.setImage(right);
    sound_9.setValue(audio);
    sound_9.secs=5;
    sound_9.setVolume(1);
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(image_42);
    FeedbackComponents.push(image_3);
    FeedbackComponents.push(image_43);
    FeedbackComponents.push(sound_9);
    
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_42* updates
    if (t >= 0 && image_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_42.tStart = t;  // (not accounting for frame time here)
      image_42.frameNStart = frameN;  // exact frame index
      
      image_42.setAutoDraw(true);
    }
    
    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_42.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_42.setAutoDraw(false);
    }
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
    }
    
    // *image_43* updates
    if (t >= 0.0 && image_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_43.tStart = t;  // (not accounting for frame time here)
      image_43.frameNStart = frameN;  // exact frame index
      
      image_43.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_43.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_43.setAutoDraw(false);
    }
    // start/stop sound_9
    if (t >= 0 && sound_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_9.tStart = t;  // (not accounting for frame time here)
      sound_9.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_9.play(); });  // screen flip
      sound_9.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_9.tStart + 0.5) {
        sound_9.stop();  // stop the sound (if longer than duration)
        sound_9.status = PsychoJS.Status.FINISHED;
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
    FeedbackComponents.forEach( function(thisComponent) {
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


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Feedback.stopped', globalClock.getTime());
    sound_9 = new sound.Sound({
          win: psychoJS.window,
          value: 'A',
          secs: 5,
          });
    sound_9.setVolume(1.0);
    sound_9.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var UpdateAccuracyComponents;
function UpdateAccuracyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'UpdateAccuracy' ---
    t = 0;
    UpdateAccuracyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('UpdateAccuracy.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    if (key_resp_2.keys) {
        if (key_resp_2.corr) {
            counterOne += 1;
        } else {
            counterTwo += 1;
        }
    } else {
        key_resp_2.corr = 0;
        counterTwo += 1;
    }
    
    // keep track of which components have finished
    UpdateAccuracyComponents = [];
    
    UpdateAccuracyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function UpdateAccuracyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'UpdateAccuracy' ---
    // get current time
    t = UpdateAccuracyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    UpdateAccuracyComponents.forEach( function(thisComponent) {
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


function UpdateAccuracyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'UpdateAccuracy' ---
    UpdateAccuracyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('UpdateAccuracy.stopped', globalClock.getTime());
    // the Routine "UpdateAccuracy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var outPut;
var _key_resp_18_allKeys;
var continueStatusComponents;
function continueStatusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'continueStatus' ---
    t = 0;
    continueStatusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('continueStatus.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_11
    if ((counterOne >= 3)) {
        outPut = (((((("\u505a\u5f97\u597d\uff0c\u7ec3\u4e60\u7ed3\u675f\u4e86\u3002" + "\n") + "\n") + "\u8ba9\u6211\u4eec\u5f00\u59cb\u6b63\u5f0f\u5b9e\u9a8c\u5427\uff01") + "\n") + "\n") + "\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u3002");
        audio = "audio/F-d.wav";
        block.finished = true;
    }
    if ((counterTwo > 1)) {
        outPut = (((("\u5f88\u9057\u61be\uff0c\u8fd9\u6b21\u7ec3\u4e60\u5931\u8d25\u4e86\uff0c\u8ba9\u6211\u4eec\u518d\u8bd5\u4e00\u6b21\u3002" + "\n") + "\n") + "\n") + "\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u3002");
        audio = "audio/F-e.wav";
        isForward += 1;
        block.finished = false;
        counterOne = 0;
        counterTwo = 0;
        if ((isForward === 3)) {
            outPut = ((("\u5f88\u9057\u61be\uff0c\u60a8\u6ca1\u80fd\u901a\u8fc7\u7ec3\u4e60\u73af\u8282\u3002" + "\n") + "\n") + "\u4efb\u52a1\u7ed3\u675f\uff0c\u611f\u8c22\u60a8\u7684\u53c2\u4e0e\u3002");
            audio = "audio/F-g.wav";
            block.finished = true;
        }
    }
    
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    sound_10.setValue(audio);
    sound_10.secs=20;
    sound_10.setVolume(1.0);
    // keep track of which components have finished
    continueStatusComponents = [];
    continueStatusComponents.push(text_24);
    continueStatusComponents.push(key_resp_18);
    continueStatusComponents.push(sound_10);
    
    continueStatusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function continueStatusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'continueStatus' ---
    // get current time
    t = continueStatusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    if (text_24.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_24.setText(outPut, false);
    }
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }
    
    
    // *key_resp_18* updates
    if (t >= 0.0 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
    }
    
    if (key_resp_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_18.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
      if (_key_resp_18_allKeys.length > 0) {
        key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
        key_resp_18.duration = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_10
    if (t >= 0.0 && sound_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_10.tStart = t;  // (not accounting for frame time here)
      sound_10.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_10.play(); });  // screen flip
      sound_10.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_10.tStart + 0.5) {
        sound_10.stop();  // stop the sound (if longer than duration)
        sound_10.status = PsychoJS.Status.FINISHED;
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
    continueStatusComponents.forEach( function(thisComponent) {
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


function continueStatusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'continueStatus' ---
    continueStatusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continueStatus.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_12
    if ((isForward === 3)) {
        psychoJS.quit();
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_18.corr, level);
    }
    psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
    if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
        psychoJS.experiment.addData('key_resp_18.duration', key_resp_18.duration);
        routineTimer.reset();
        }
    
    key_resp_18.stop();
    sound_10.stop();  // ensure sound has stopped at end of Routine
    // the Routine "continueStatus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_9_allKeys;
var Main_Exp_InstructionsComponents;
function Main_Exp_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Main_Exp_Instructions' ---
    t = 0;
    Main_Exp_InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Main_Exp_Instructions.started', globalClock.getTime());
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    sound_13.secs=40;
    sound_13.setVolume(1);
    // keep track of which components have finished
    Main_Exp_InstructionsComponents = [];
    Main_Exp_InstructionsComponents.push(text_10);
    Main_Exp_InstructionsComponents.push(key_resp_9);
    Main_Exp_InstructionsComponents.push(sound_13);
    
    Main_Exp_InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Main_Exp_InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Main_Exp_Instructions' ---
    // get current time
    t = Main_Exp_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
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
    
    // start/stop sound_13
    if (t >= 0.0 && sound_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_13.tStart = t;  // (not accounting for frame time here)
      sound_13.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_13.play(); });  // screen flip
      sound_13.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 40 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_13.tStart + 0.5) {
        sound_13.stop();  // stop the sound (if longer than duration)
        sound_13.status = PsychoJS.Status.FINISHED;
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
    Main_Exp_InstructionsComponents.forEach( function(thisComponent) {
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


function Main_Exp_InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Main_Exp_Instructions' ---
    Main_Exp_InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Main_Exp_Instructions.stopped', globalClock.getTime());
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
    sound_13.stop();  // ensure sound has stopped at end of Routine
    // the Routine "Main_Exp_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ISIcode_testComponents;
function ISIcode_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ISIcode_test' ---
    t = 0;
    ISIcode_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ISIcode_test.started', globalClock.getTime());
    // keep track of which components have finished
    ISIcode_testComponents = [];
    
    ISIcode_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ISIcode_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ISIcode_test' ---
    // get current time
    t = ISIcode_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ISIcode_testComponents.forEach( function(thisComponent) {
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


function ISIcode_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ISIcode_test' ---
    ISIcode_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ISIcode_test.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_14
    ISIRange = linspace(1000, 1500, 500);
    shuffle(ISIRange);
    thisISI = (ISIRange[0] / 1000);
    console.log("thisISI: ", thisISI);
    trials.addData("ISI", thisISI);
    thistype = 'formal';
    trials.addData('type', thistype)
    
    // the Routine "ISIcode_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finishComponents;
function finishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finish' ---
    t = 0;
    finishClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('finish.started', globalClock.getTime());
    sound_12.secs=3.5;
    sound_12.setVolume(1.0);
    // keep track of which components have finished
    finishComponents = [];
    finishComponents.push(text_3);
    finishComponents.push(sound_12);
    
    finishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finish' ---
    // get current time
    t = finishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // start/stop sound_12
    if (t >= 0.0 && sound_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_12.tStart = t;  // (not accounting for frame time here)
      sound_12.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_12.play(); });  // screen flip
      sound_12.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_12.tStart + 0.5) {
        sound_12.stop();  // stop the sound (if longer than duration)
        sound_12.status = PsychoJS.Status.FINISHED;
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
    finishComponents.forEach( function(thisComponent) {
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


function finishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finish' ---
    finishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('finish.stopped', globalClock.getTime());
    sound_12.stop();  // ensure sound has stopped at end of Routine
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
