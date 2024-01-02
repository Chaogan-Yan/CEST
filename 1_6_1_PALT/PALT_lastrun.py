#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.2),
    on Tue Dec 12 09:53:28 2023
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# Store info about the experiment session
psychopyVersion = '2023.2.2'
expName = 'PALT'  # from the Builder filename that created this script
expInfo = {
    '编号': '',
    'date': data.getDateStr(),  # add a simple timestamp
    'expName': expName,
    'psychopyVersion': psychopyVersion,
}


def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # temporarily remove keys which the dialog doesn't need to show
    poppedKeys = {
        'date': expInfo.pop('date', data.getDateStr()),
        'expName': expInfo.pop('expName', expName),
        'psychopyVersion': expInfo.pop('psychopyVersion', psychopyVersion),
    }
    # show participant info dialog
    dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # restore hidden keys
    expInfo.update(poppedKeys)
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/1_6_1_%s_%s_%s' % (expName, expInfo['编号'], expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/chen-nanwu/Desktop/CEST_1128/1_6_1_PALT/PALT_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(logging.EXP)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=logging.EXP)
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=[1440, 900], fullscr=True, screen=0,
            winType='pyglet', allowStencil=True,
            monitor='testMonitor', color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height'
        )
        if expInfo is not None:
            # store frame rate of monitor if we can measure it
            expInfo['frameRate'] = win.getActualFrameRate()
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [-1.0000, -1.0000, -1.0000]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    win.mouseVisible = False
    win.hideMessage()
    return win


def setupInputs(expInfo, thisExp, win):
    """
    Setup whatever inputs are available (mouse, keyboard, eyetracker, etc.)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    dict
        Dictionary of input devices by name.
    """
    # --- Setup input devices ---
    inputs = {}
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    ioSession = '1'
    if 'session' in expInfo:
        ioSession = str(expInfo['session'])
    ioServer = io.launchHubServer(window=win, **ioConfig)
    eyetracker = None
    
    # create a default keyboard (e.g. to check for escape)
    defaultKeyboard = keyboard.Keyboard(backend='iohub')
    # return inputs dict
    return {
        'ioServer': ioServer,
        'defaultKeyboard': defaultKeyboard,
        'eyetracker': eyetracker,
    }

def pauseExperiment(thisExp, inputs=None, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # make sure we have a keyboard
        if inputs is None:
            inputs = {
                'defaultKeyboard': keyboard.Keyboard(backend='ioHub')
            }
        # check for quit (typically the Esc key)
        if inputs['defaultKeyboard'].getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win, inputs=inputs)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, inputs=inputs, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, inputs, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    inputs : dict
        Dictionary of input devices by name.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = inputs['ioServer']
    defaultKeyboard = inputs['defaultKeyboard']
    eyetracker = inputs['eyetracker']
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    # Make folder to store recordings from mic
    micRecFolder = filename + '_mic_recorded'
    if not os.path.isdir(micRecFolder):
        os.mkdir(micRecFolder)
    
    # --- Initialize components for Routine "instr" ---
    instr_text = visual.TextStim(win=win, name='instr_text',
        text='欢迎参加词语配对联想学习测验！\n\n在这个测验中，我将给您播放12对词，您要注意听，\n\n要求您记住哪两个词是连在一起的一对，\n\n比如我念“桌子-马车”，\n\n表示“桌子”和“马车”是连在一起的一对词。\n\n\n按空格键继续。',
        font='Heiti SC',
        pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp = keyboard.Keyboard()
    instr_sound = sound.Sound('audio/instr.wav', secs=-1, stereo=True, hamming=True,
        name='instr_sound')
    instr_sound.setVolume(1.0)
    
    # --- Initialize components for Routine "instr_2" ---
    instr_2_text = visual.TextStim(win=win, name='instr_2_text',
        text='12对词播放完毕后，就会开始测试，\n\n我念每对词中前面的一个词，\n\n要求您答出和它一对的后面一个词来，\n\n比如念“桌子”，您就答“马车”，听明白了么？\n\n\n按空格键继续。',
        font='Heiti SC',
        pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_2 = keyboard.Keyboard()
    instr_2_sound = sound.Sound('audio/instr_2.wav', secs=-1, stereo=True, hamming=True,
        name='instr_2_sound')
    instr_2_sound.setVolume(1.0)
    
    # --- Initialize components for Routine "instr_3" ---
    instr_3_text = visual.TextStim(win=win, name='instr_3_text',
        text='',
        font='Heiti SC',
        pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    instr_3_sound = sound.Sound('A', secs=-1, stereo=True, hamming=True,
        name='instr_3_sound')
    instr_3_sound.setVolume(1.0)
    
    # --- Initialize components for Routine "S1" ---
    sound_1 = sound.Sound('A', secs=1.5, stereo=True, hamming=True,
        name='sound_1')
    sound_1.setVolume(1.0)
    image = visual.ImageStim(
        win=win,
        name='image', 
        image='player_icon.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "S2" ---
    sound_2 = sound.Sound('A', secs=1.5, stereo=True, hamming=True,
        name='sound_2')
    sound_2.setVolume(1.0)
    image_2 = visual.ImageStim(
        win=win,
        name='image_2', 
        image='player_icon.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "interval" ---
    text_2 = visual.TextStim(win=win, name='text_2',
        text=None,
        font='STSong',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "instr_4" ---
    instr_4_text = visual.TextStim(win=win, name='instr_4_text',
        text='好，下面我读前面一个词，\n\n请您回答和它一对儿的后面一个词。\n\n请注意，每对词允许的回忆时间为5秒。\n\n请在看到“请作答”的提示字样后作答。\n\n\n按空格键继续。',
        font='Heiti SC',
        pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_3 = keyboard.Keyboard()
    instr_4_sound = sound.Sound('audio/instr_4.wav', secs=-1, stereo=True, hamming=True,
        name='instr_4_sound')
    instr_4_sound.setVolume(1.0)
    # create a microphone object for device: default
    defaultMicrophone = sound.microphone.Microphone(
        device=None, channels=None, 
        sampleRateHz=48000, maxRecordingSize=24000.0
    )
    
    # --- Initialize components for Routine "answer1" ---
    sound_3 = sound.Sound('A', secs=1.5, stereo=True, hamming=True,
        name='sound_3')
    sound_3.setVolume(1.0)
    image_3 = visual.ImageStim(
        win=win,
        name='image_3', 
        image='player_icon.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    text = visual.TextStim(win=win, name='text',
        text='请作答',
        font='Heiti SC',
        pos=(0, -0.1), height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    # link mic to device object
    mic = defaultMicrophone
    image_4 = visual.ImageStim(
        win=win,
        name='image_4', 
        image='mic_icon.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0, 0.1), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    
    # --- Initialize components for Routine "recall" ---
    recall_text = visual.TextStim(win=win, name='recall_text',
        text='回忆结束，现在，请想一想，您刚才是用什么方法记忆这些词对的？\n\n您可以具体回忆一下刚才记忆成功的词对，想想您是如何记住它们的。\n\n',
        font='Heiti SC',
        pos=(0, 0.3), height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    textbox = visual.TextBox2(
         win, text=None, placeholder='请大致描述您记忆词对的方式...', font='STSong',
         pos=(0, 0),     letterHeight=0.05,
         size=(0.5, 0.5), borderWidth=2.0,
         color='white', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=True,
         name='textbox',
         depth=-1, autoLog=True,
    )
    button = visual.ButtonStim(win, 
        text='提交', font='STSong',
        pos=(0, -0.3),units='height',
        letterHeight=0.03,
        size=(0.1, 0.06), borderWidth=0.0,
        fillColor=[-1.0000, -1.0000, 0.0902], borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=False, italic=False,
        padding=None,
        anchor='center',
        name='button',
        depth=-2
    )
    button.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "thanks" ---
    endpage = visual.TextStim(win=win, name='endpage',
        text='实验结束，感谢您的参与！',
        font='Heiti SC',
        pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # create some handy timers
    if globalClock is None:
        globalClock = core.Clock()  # to track the time since experiment started
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6)
    
    # --- Prepare to start Routine "instr" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instr.started', globalClock.getTime())
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    instr_sound.setSound('audio/instr.wav', hamming=True)
    instr_sound.setVolume(1.0, log=False)
    instr_sound.seek(0)
    # keep track of which components have finished
    instrComponents = [instr_text, key_resp, instr_sound]
    for thisComponent in instrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instr" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instr_text* updates
        
        # if instr_text is starting this frame...
        if instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_text.frameNStart = frameN  # exact frame index
            instr_text.tStart = t  # local t and not account for scr refresh
            instr_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instr_text.started')
            # update status
            instr_text.status = STARTED
            instr_text.setAutoDraw(True)
        
        # if instr_text is active this frame...
        if instr_text.status == STARTED:
            # update params
            pass
        
        # *key_resp* updates
        waitOnFlip = False
        
        # if key_resp is starting this frame...
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp.started')
            # update status
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                key_resp.duration = _key_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # if instr_sound is starting this frame...
        if instr_sound.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_sound.frameNStart = frameN  # exact frame index
            instr_sound.tStart = t  # local t and not account for scr refresh
            instr_sound.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('instr_sound.started', tThisFlipGlobal)
            # update status
            instr_sound.status = STARTED
            instr_sound.play(when=win)  # sync with win flip
        # update instr_sound status according to whether it's playing
        if instr_sound.isPlaying:
            instr_sound.status = STARTED
        elif instr_sound.isFinished:
            instr_sound.status = FINISHED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instr" ---
    for thisComponent in instrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instr.stopped', globalClock.getTime())
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    thisExp.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        thisExp.addData('key_resp.rt', key_resp.rt)
        thisExp.addData('key_resp.duration', key_resp.duration)
    thisExp.nextEntry()
    instr_sound.pause()  # ensure sound has stopped at end of Routine
    # the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instr_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instr_2.started', globalClock.getTime())
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    instr_2_sound.setSound('audio/instr_2.wav', hamming=True)
    instr_2_sound.setVolume(1.0, log=False)
    instr_2_sound.seek(0)
    # keep track of which components have finished
    instr_2Components = [instr_2_text, key_resp_2, instr_2_sound]
    for thisComponent in instr_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instr_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instr_2_text* updates
        
        # if instr_2_text is starting this frame...
        if instr_2_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_2_text.frameNStart = frameN  # exact frame index
            instr_2_text.tStart = t  # local t and not account for scr refresh
            instr_2_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_2_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instr_2_text.started')
            # update status
            instr_2_text.status = STARTED
            instr_2_text.setAutoDraw(True)
        
        # if instr_2_text is active this frame...
        if instr_2_text.status == STARTED:
            # update params
            pass
        
        # *key_resp_2* updates
        waitOnFlip = False
        
        # if key_resp_2 is starting this frame...
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_2.started')
            # update status
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # if instr_2_sound is starting this frame...
        if instr_2_sound.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_2_sound.frameNStart = frameN  # exact frame index
            instr_2_sound.tStart = t  # local t and not account for scr refresh
            instr_2_sound.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('instr_2_sound.started', tThisFlipGlobal)
            # update status
            instr_2_sound.status = STARTED
            instr_2_sound.play(when=win)  # sync with win flip
        # update instr_2_sound status according to whether it's playing
        if instr_2_sound.isPlaying:
            instr_2_sound.status = STARTED
        elif instr_2_sound.isFinished:
            instr_2_sound.status = FINISHED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instr_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instr_2" ---
    for thisComponent in instr_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instr_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    thisExp.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        thisExp.addData('key_resp_2.rt', key_resp_2.rt)
        thisExp.addData('key_resp_2.duration', key_resp_2.duration)
    thisExp.nextEntry()
    instr_2_sound.pause()  # ensure sound has stopped at end of Routine
    # the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    block = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('zdy_with_sound.xlsx'),
        seed=None, name='block')
    thisExp.addLoop(block)  # add the loop to the experiment
    thisBlock = block.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            globals()[paramName] = thisBlock[paramName]
    
    for thisBlock in block:
        currentLoop = block
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
        if thisBlock != None:
            for paramName in thisBlock:
                globals()[paramName] = thisBlock[paramName]
        
        # --- Prepare to start Routine "instr_3" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('instr_3.started', globalClock.getTime())
        instr_3_text.setText(instruction)
        instr_3_sound.setSound(instructions_sound, secs=4, hamming=True)
        instr_3_sound.setVolume(1.0, log=False)
        instr_3_sound.seek(0)
        # keep track of which components have finished
        instr_3Components = [instr_3_text, instr_3_sound]
        for thisComponent in instr_3Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "instr_3" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 4.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *instr_3_text* updates
            
            # if instr_3_text is starting this frame...
            if instr_3_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instr_3_text.frameNStart = frameN  # exact frame index
                instr_3_text.tStart = t  # local t and not account for scr refresh
                instr_3_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instr_3_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'instr_3_text.started')
                # update status
                instr_3_text.status = STARTED
                instr_3_text.setAutoDraw(True)
            
            # if instr_3_text is active this frame...
            if instr_3_text.status == STARTED:
                # update params
                pass
            
            # if instr_3_text is stopping this frame...
            if instr_3_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > instr_3_text.tStartRefresh + 4-frameTolerance:
                    # keep track of stop time/frame for later
                    instr_3_text.tStop = t  # not accounting for scr refresh
                    instr_3_text.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'instr_3_text.stopped')
                    # update status
                    instr_3_text.status = FINISHED
                    instr_3_text.setAutoDraw(False)
            
            # if instr_3_sound is starting this frame...
            if instr_3_sound.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instr_3_sound.frameNStart = frameN  # exact frame index
                instr_3_sound.tStart = t  # local t and not account for scr refresh
                instr_3_sound.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('instr_3_sound.started', tThisFlipGlobal)
                # update status
                instr_3_sound.status = STARTED
                instr_3_sound.play(when=win)  # sync with win flip
            
            # if instr_3_sound is stopping this frame...
            if instr_3_sound.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > instr_3_sound.tStartRefresh + 4-frameTolerance:
                    # keep track of stop time/frame for later
                    instr_3_sound.tStop = t  # not accounting for scr refresh
                    instr_3_sound.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'instr_3_sound.stopped')
                    # update status
                    instr_3_sound.status = FINISHED
                    instr_3_sound.stop()
            # update instr_3_sound status according to whether it's playing
            if instr_3_sound.isPlaying:
                instr_3_sound.status = STARTED
            elif instr_3_sound.isFinished:
                instr_3_sound.status = FINISHED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instr_3Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "instr_3" ---
        for thisComponent in instr_3Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('instr_3.stopped', globalClock.getTime())
        instr_3_sound.pause()  # ensure sound has stopped at end of Routine
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-4.000000)
        
        # set up handler to look after randomisation of conditions etc
        read1_trials = data.TrialHandler(nReps=1.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('read_sound.xlsx'),
            seed=None, name='read1_trials')
        thisExp.addLoop(read1_trials)  # add the loop to the experiment
        thisRead1_trial = read1_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisRead1_trial.rgb)
        if thisRead1_trial != None:
            for paramName in thisRead1_trial:
                globals()[paramName] = thisRead1_trial[paramName]
        
        for thisRead1_trial in read1_trials:
            currentLoop = read1_trials
            thisExp.timestampOnFlip(win, 'thisRow.t')
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    inputs=inputs, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisRead1_trial.rgb)
            if thisRead1_trial != None:
                for paramName in thisRead1_trial:
                    globals()[paramName] = thisRead1_trial[paramName]
            
            # --- Prepare to start Routine "S1" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('S1.started', globalClock.getTime())
            sound_1.setSound(sound1, secs=1.5, hamming=True)
            sound_1.setVolume(1.0, log=False)
            sound_1.seek(0)
            # keep track of which components have finished
            S1Components = [sound_1, image]
            for thisComponent in S1Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "S1" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # if sound_1 is starting this frame...
                if sound_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    sound_1.frameNStart = frameN  # exact frame index
                    sound_1.tStart = t  # local t and not account for scr refresh
                    sound_1.tStartRefresh = tThisFlipGlobal  # on global time
                    # add timestamp to datafile
                    thisExp.addData('sound_1.started', tThisFlipGlobal)
                    # update status
                    sound_1.status = STARTED
                    sound_1.play(when=win)  # sync with win flip
                
                # if sound_1 is stopping this frame...
                if sound_1.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > sound_1.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        sound_1.tStop = t  # not accounting for scr refresh
                        sound_1.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'sound_1.stopped')
                        # update status
                        sound_1.status = FINISHED
                        sound_1.stop()
                # update sound_1 status according to whether it's playing
                if sound_1.isPlaying:
                    sound_1.status = STARTED
                elif sound_1.isFinished:
                    sound_1.status = FINISHED
                
                # *image* updates
                
                # if image is starting this frame...
                if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image.frameNStart = frameN  # exact frame index
                    image.tStart = t  # local t and not account for scr refresh
                    image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image.started')
                    # update status
                    image.status = STARTED
                    image.setAutoDraw(True)
                
                # if image is active this frame...
                if image.status == STARTED:
                    # update params
                    pass
                
                # if image is stopping this frame...
                if image.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        image.tStop = t  # not accounting for scr refresh
                        image.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image.stopped')
                        # update status
                        image.status = FINISHED
                        image.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in S1Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "S1" ---
            for thisComponent in S1Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('S1.stopped', globalClock.getTime())
            sound_1.pause()  # ensure sound has stopped at end of Routine
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.500000)
            
            # --- Prepare to start Routine "S2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('S2.started', globalClock.getTime())
            sound_2.setSound(sound2, secs=1.5, hamming=True)
            sound_2.setVolume(1.0, log=False)
            sound_2.seek(0)
            # keep track of which components have finished
            S2Components = [sound_2, image_2]
            for thisComponent in S2Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "S2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # if sound_2 is starting this frame...
                if sound_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    sound_2.frameNStart = frameN  # exact frame index
                    sound_2.tStart = t  # local t and not account for scr refresh
                    sound_2.tStartRefresh = tThisFlipGlobal  # on global time
                    # add timestamp to datafile
                    thisExp.addData('sound_2.started', tThisFlipGlobal)
                    # update status
                    sound_2.status = STARTED
                    sound_2.play(when=win)  # sync with win flip
                
                # if sound_2 is stopping this frame...
                if sound_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > sound_2.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        sound_2.tStop = t  # not accounting for scr refresh
                        sound_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'sound_2.stopped')
                        # update status
                        sound_2.status = FINISHED
                        sound_2.stop()
                # update sound_2 status according to whether it's playing
                if sound_2.isPlaying:
                    sound_2.status = STARTED
                elif sound_2.isFinished:
                    sound_2.status = FINISHED
                
                # *image_2* updates
                
                # if image_2 is starting this frame...
                if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_2.frameNStart = frameN  # exact frame index
                    image_2.tStart = t  # local t and not account for scr refresh
                    image_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_2.started')
                    # update status
                    image_2.status = STARTED
                    image_2.setAutoDraw(True)
                
                # if image_2 is active this frame...
                if image_2.status == STARTED:
                    # update params
                    pass
                
                # if image_2 is stopping this frame...
                if image_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_2.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        image_2.tStop = t  # not accounting for scr refresh
                        image_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_2.stopped')
                        # update status
                        image_2.status = FINISHED
                        image_2.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in S2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "S2" ---
            for thisComponent in S2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('S2.stopped', globalClock.getTime())
            sound_2.pause()  # ensure sound has stopped at end of Routine
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.500000)
            
            # --- Prepare to start Routine "interval" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('interval.started', globalClock.getTime())
            # keep track of which components have finished
            intervalComponents = [text_2]
            for thisComponent in intervalComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "interval" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 2.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_2* updates
                
                # if text_2 is starting this frame...
                if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_2.frameNStart = frameN  # exact frame index
                    text_2.tStart = t  # local t and not account for scr refresh
                    text_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_2.started')
                    # update status
                    text_2.status = STARTED
                    text_2.setAutoDraw(True)
                
                # if text_2 is active this frame...
                if text_2.status == STARTED:
                    # update params
                    pass
                
                # if text_2 is stopping this frame...
                if text_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_2.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        text_2.tStop = t  # not accounting for scr refresh
                        text_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_2.stopped')
                        # update status
                        text_2.status = FINISHED
                        text_2.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in intervalComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "interval" ---
            for thisComponent in intervalComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('interval.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-2.000000)
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'read1_trials'
        
        
        # --- Prepare to start Routine "instr_4" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('instr_4.started', globalClock.getTime())
        key_resp_3.keys = []
        key_resp_3.rt = []
        _key_resp_3_allKeys = []
        instr_4_sound.setSound('audio/instr_4.wav', hamming=True)
        instr_4_sound.setVolume(1.0, log=False)
        instr_4_sound.seek(0)
        # keep track of which components have finished
        instr_4Components = [instr_4_text, key_resp_3, instr_4_sound]
        for thisComponent in instr_4Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "instr_4" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *instr_4_text* updates
            
            # if instr_4_text is starting this frame...
            if instr_4_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instr_4_text.frameNStart = frameN  # exact frame index
                instr_4_text.tStart = t  # local t and not account for scr refresh
                instr_4_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instr_4_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'instr_4_text.started')
                # update status
                instr_4_text.status = STARTED
                instr_4_text.setAutoDraw(True)
            
            # if instr_4_text is active this frame...
            if instr_4_text.status == STARTED:
                # update params
                pass
            
            # *key_resp_3* updates
            waitOnFlip = False
            
            # if key_resp_3 is starting this frame...
            if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_3.frameNStart = frameN  # exact frame index
                key_resp_3.tStart = t  # local t and not account for scr refresh
                key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_3.started')
                # update status
                key_resp_3.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_3.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_3.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_3_allKeys.extend(theseKeys)
                if len(_key_resp_3_allKeys):
                    key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                    key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                    key_resp_3.duration = _key_resp_3_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # if instr_4_sound is starting this frame...
            if instr_4_sound.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instr_4_sound.frameNStart = frameN  # exact frame index
                instr_4_sound.tStart = t  # local t and not account for scr refresh
                instr_4_sound.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('instr_4_sound.started', tThisFlipGlobal)
                # update status
                instr_4_sound.status = STARTED
                instr_4_sound.play(when=win)  # sync with win flip
            # update instr_4_sound status according to whether it's playing
            if instr_4_sound.isPlaying:
                instr_4_sound.status = STARTED
            elif instr_4_sound.isFinished:
                instr_4_sound.status = FINISHED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instr_4Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "instr_4" ---
        for thisComponent in instr_4Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('instr_4.stopped', globalClock.getTime())
        # check responses
        if key_resp_3.keys in ['', [], None]:  # No response was made
            key_resp_3.keys = None
        block.addData('key_resp_3.keys',key_resp_3.keys)
        if key_resp_3.keys != None:  # we had a response
            block.addData('key_resp_3.rt', key_resp_3.rt)
            block.addData('key_resp_3.duration', key_resp_3.duration)
        instr_4_sound.pause()  # ensure sound has stopped at end of Routine
        # the Routine "instr_4" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        answer1_trials = data.TrialHandler(nReps=1.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('answer_sound.xlsx'),
            seed=None, name='answer1_trials')
        thisExp.addLoop(answer1_trials)  # add the loop to the experiment
        thisAnswer1_trial = answer1_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisAnswer1_trial.rgb)
        if thisAnswer1_trial != None:
            for paramName in thisAnswer1_trial:
                globals()[paramName] = thisAnswer1_trial[paramName]
        
        for thisAnswer1_trial in answer1_trials:
            currentLoop = answer1_trials
            thisExp.timestampOnFlip(win, 'thisRow.t')
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    inputs=inputs, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisAnswer1_trial.rgb)
            if thisAnswer1_trial != None:
                for paramName in thisAnswer1_trial:
                    globals()[paramName] = thisAnswer1_trial[paramName]
            
            # --- Prepare to start Routine "answer1" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('answer1.started', globalClock.getTime())
            sound_3.setSound(prompt, secs=1.5, hamming=True)
            sound_3.setVolume(1.0, log=False)
            sound_3.seek(0)
            # keep track of which components have finished
            answer1Components = [sound_3, image_3, text, mic, image_4]
            for thisComponent in answer1Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "answer1" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 6.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # if sound_3 is starting this frame...
                if sound_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    sound_3.frameNStart = frameN  # exact frame index
                    sound_3.tStart = t  # local t and not account for scr refresh
                    sound_3.tStartRefresh = tThisFlipGlobal  # on global time
                    # add timestamp to datafile
                    thisExp.addData('sound_3.started', tThisFlipGlobal)
                    # update status
                    sound_3.status = STARTED
                    sound_3.play(when=win)  # sync with win flip
                
                # if sound_3 is stopping this frame...
                if sound_3.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > sound_3.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        sound_3.tStop = t  # not accounting for scr refresh
                        sound_3.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'sound_3.stopped')
                        # update status
                        sound_3.status = FINISHED
                        sound_3.stop()
                # update sound_3 status according to whether it's playing
                if sound_3.isPlaying:
                    sound_3.status = STARTED
                elif sound_3.isFinished:
                    sound_3.status = FINISHED
                
                # *image_3* updates
                
                # if image_3 is starting this frame...
                if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_3.frameNStart = frameN  # exact frame index
                    image_3.tStart = t  # local t and not account for scr refresh
                    image_3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_3.started')
                    # update status
                    image_3.status = STARTED
                    image_3.setAutoDraw(True)
                
                # if image_3 is active this frame...
                if image_3.status == STARTED:
                    # update params
                    pass
                
                # if image_3 is stopping this frame...
                if image_3.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_3.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        image_3.tStop = t  # not accounting for scr refresh
                        image_3.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_3.stopped')
                        # update status
                        image_3.status = FINISHED
                        image_3.setAutoDraw(False)
                
                # *text* updates
                
                # if text is starting this frame...
                if text.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                    # keep track of start time/frame for later
                    text.frameNStart = frameN  # exact frame index
                    text.tStart = t  # local t and not account for scr refresh
                    text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text.started')
                    # update status
                    text.status = STARTED
                    text.setAutoDraw(True)
                
                # if text is active this frame...
                if text.status == STARTED:
                    # update params
                    pass
                
                # if text is stopping this frame...
                if text.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text.tStop = t  # not accounting for scr refresh
                        text.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text.stopped')
                        # update status
                        text.status = FINISHED
                        text.setAutoDraw(False)
                
                # if mic is starting this frame...
                if mic.status == NOT_STARTED and t >= 1.5-frameTolerance:
                    # keep track of start time/frame for later
                    mic.frameNStart = frameN  # exact frame index
                    mic.tStart = t  # local t and not account for scr refresh
                    mic.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mic, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.addData('mic.started', t)
                    # update status
                    mic.status = STARTED
                    # start recording with mic
                    mic.start()
                
                # if mic is active this frame...
                if mic.status == STARTED:
                    # update params
                    pass
                    # update recorded clip for mic
                    mic.poll()
                
                # if mic is stopping this frame...
                if mic.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > mic.tStartRefresh + 5-frameTolerance:
                        # keep track of stop time/frame for later
                        mic.tStop = t  # not accounting for scr refresh
                        mic.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.addData('mic.stopped', t)
                        # update status
                        mic.status = FINISHED
                        # stop recording with mic
                        mic.stop()
                
                # *image_4* updates
                
                # if image_4 is starting this frame...
                if image_4.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                    # keep track of start time/frame for later
                    image_4.frameNStart = frameN  # exact frame index
                    image_4.tStart = t  # local t and not account for scr refresh
                    image_4.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_4.started')
                    # update status
                    image_4.status = STARTED
                    image_4.setAutoDraw(True)
                
                # if image_4 is active this frame...
                if image_4.status == STARTED:
                    # update params
                    pass
                
                # if image_4 is stopping this frame...
                if image_4.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_4.tStartRefresh + 5-frameTolerance:
                        # keep track of stop time/frame for later
                        image_4.tStop = t  # not accounting for scr refresh
                        image_4.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_4.stopped')
                        # update status
                        image_4.status = FINISHED
                        image_4.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in answer1Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "answer1" ---
            for thisComponent in answer1Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('answer1.stopped', globalClock.getTime())
            sound_3.pause()  # ensure sound has stopped at end of Routine
            # tell mic to keep hold of current recording in mic.clips and transcript (if applicable) in mic.scripts
            # this will also update mic.lastClip and mic.lastScript
            mic.stop()
            tag = data.utils.getDateStr()
            micClip = mic.bank(
                tag=tag, transcribe='None',
                config=None
            )
            answer1_trials.addData('mic.clip', os.path.join(micRecFolder, 'recording_mic_%s.wav' % tag))
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-6.500000)
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'answer1_trials'
        
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1.0 repeats of 'block'
    
    
    # --- Prepare to start Routine "recall" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('recall.started', globalClock.getTime())
    textbox.reset()
    # reset button to account for continued clicks & clear times on/off
    button.reset()
    # keep track of which components have finished
    recallComponents = [recall_text, textbox, button]
    for thisComponent in recallComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "recall" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *recall_text* updates
        
        # if recall_text is starting this frame...
        if recall_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            recall_text.frameNStart = frameN  # exact frame index
            recall_text.tStart = t  # local t and not account for scr refresh
            recall_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(recall_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'recall_text.started')
            # update status
            recall_text.status = STARTED
            recall_text.setAutoDraw(True)
        
        # if recall_text is active this frame...
        if recall_text.status == STARTED:
            # update params
            pass
        
        # *textbox* updates
        
        # if textbox is starting this frame...
        if textbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textbox.frameNStart = frameN  # exact frame index
            textbox.tStart = t  # local t and not account for scr refresh
            textbox.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textbox, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'textbox.started')
            # update status
            textbox.status = STARTED
            textbox.setAutoDraw(True)
        
        # if textbox is active this frame...
        if textbox.status == STARTED:
            # update params
            pass
        # *button* updates
        
        # if button is starting this frame...
        if button.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            button.frameNStart = frameN  # exact frame index
            button.tStart = t  # local t and not account for scr refresh
            button.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(button, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'button.started')
            # update status
            button.status = STARTED
            button.setAutoDraw(True)
        
        # if button is active this frame...
        if button.status == STARTED:
            # update params
            pass
            # check whether button has been pressed
            if button.isClicked:
                if not button.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    button.timesOn.append(button.buttonClock.getTime())
                    button.timesOff.append(button.buttonClock.getTime())
                elif len(button.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    button.timesOff[-1] = button.buttonClock.getTime()
                if not button.wasClicked:
                    # end routine when button is clicked
                    continueRoutine = False
                if not button.wasClicked:
                    # run callback code when button is clicked
                    pass
        # take note of whether button was clicked, so that next frame we know if clicks are new
        button.wasClicked = button.isClicked and button.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in recallComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "recall" ---
    for thisComponent in recallComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('recall.stopped', globalClock.getTime())
    thisExp.addData('textbox.text',textbox.text)
    thisExp.addData('button.numClicks', button.numClicks)
    if button.numClicks:
       thisExp.addData('button.timesOn', button.timesOn)
       thisExp.addData('button.timesOff', button.timesOff)
    else:
       thisExp.addData('button.timesOn', "")
       thisExp.addData('button.timesOff', "")
    # the Routine "recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "thanks" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('thanks.started', globalClock.getTime())
    # keep track of which components have finished
    thanksComponents = [endpage]
    for thisComponent in thanksComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "thanks" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 1.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *endpage* updates
        
        # if endpage is starting this frame...
        if endpage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            endpage.frameNStart = frameN  # exact frame index
            endpage.tStart = t  # local t and not account for scr refresh
            endpage.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(endpage, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'endpage.started')
            # update status
            endpage.status = STARTED
            endpage.setAutoDraw(True)
        
        # if endpage is active this frame...
        if endpage.status == STARTED:
            # update params
            pass
        
        # if endpage is stopping this frame...
        if endpage.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > endpage.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                endpage.tStop = t  # not accounting for scr refresh
                endpage.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'endpage.stopped')
                # update status
                endpage.status = FINISHED
                endpage.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in thanksComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "thanks" ---
    for thisComponent in thanksComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('thanks.stopped', globalClock.getTime())
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-1.000000)
    # save mic recordings
    for tag in mic.clips:
        for i, clip in enumerate(mic.clips[tag]):
            clipFilename = 'recording_mic_%s.wav' % tag
            # if there's more than 1 clip with this tag, append a counter for all beyond the first
            if i > 0:
                clipFilename += '_%s' % i
            clip.save(os.path.join(micRecFolder, clipFilename))
    
    # mark experiment as finished
    endExperiment(thisExp, win=win, inputs=inputs)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, inputs=None, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()


def quit(thisExp, win=None, inputs=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    inputs : dict
        Dictionary of input devices by name.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    inputs = setupInputs(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win, 
        inputs=inputs
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win, inputs=inputs)
