#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.2),
    on Wed Oct 11 00:11:50 2023
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
expName = 'NBack_2Back'  # from the Builder filename that created this script
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
    filename = u'data/1_5_1_%s_%s_%s' % (expName, expInfo['编号'], expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/chen-nanwu/Desktop/CEST_v2/1_5_1_NBack_2Back/2-back_lastrun.py',
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
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height'
        )
        if expInfo is not None:
            # store frame rate of monitor if we can measure it
            expInfo['frameRate'] = win.getActualFrameRate()
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
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
    
    # --- Initialize components for Routine "instr" ---
    welpage = visual.TextStim(win=win, name='welpage',
        text='欢迎来到2-back实验！\n\n在这个实验中，您会依序在屏幕上看到不同的数字。\n\n如果现在这个数字和两个之前的数字是一样的，\n请按 f 键，\n\n如果现在这个数字和两个之前的数字是不同的，\n请按 j 键。\n\n\n请按空格键继续。',
        font='STSong',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    instr_key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "instr_2" ---
    welpage_2 = visual.TextStim(win=win, name='welpage_2',
        text='例如，在下面这种情况下，\n\n当前数字和两个之前的数字是一样的，\n所以应该按 f 键。',
        font='STSong',
        pos=(0, 0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    welpage_2_2 = visual.TextStim(win=win, name='welpage_2_2',
        text='请按 f 键继续。',
        font='STSong',
        pos=(0, -0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    same_e_g = visual.ImageStim(
        win=win,
        name='same_e_g', 
        image='same示例.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.6, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    instr_key_resp_2 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "instr_3" ---
    welpage_3 = visual.TextStim(win=win, name='welpage_3',
        text='在下面这种情况下，\n\n当前数字和两个之前的数字是不同的，\n所以应该按 j 键。',
        font='STSong',
        pos=(0, 0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    welpage_3_2 = visual.TextStim(win=win, name='welpage_3_2',
        text='请按 j 键继续。',
        font='STSong',
        pos=(0,-0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    different_e_g = visual.ImageStim(
        win=win,
        name='different_e_g', 
        image='different示例.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.6, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    instr_key_resp_3 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "instr_3_1" ---
    welpage_3_1 = visual.TextStim(win=win, name='welpage_3_1',
        text='每次实验开头的前两个数字无法与其它数字进行比对，\n因此无需做出反应，\n也就是说，您需要从第三个数字呈现时开始做出反应。\n\n\n请按空格键继续。\n',
        font='STSong',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    instr_key_resp_3_1 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "instr_4" ---
    welpage_4 = visual.TextStim(win=win, name='welpage_4',
        text='现在请试一试。\n\n请保持注视屏幕上的“+”注视点，\n并在看到数字后立即做出反应，\n试着在保证正确的同时尽可能快地回答。\n\n如果您回答错误，继续回答下一题即可。\n记得，回答完之后把手指保持在 f 键和 j 键上。\n\n\n请按空格键继续。\n',
        font='STSong',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    instr_key_resp_4 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "prac_rest" ---
    # Run 'Begin Experiment' code from code_4
    prac_rest_text = ''
    prac_rest_instr = visual.TextStim(win=win, name='prac_rest_instr',
        text='',
        font='STSong',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    prac_rest_key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "prac_fixation" ---
    prac_fix = visual.TextStim(win=win, name='prac_fix',
        text='+',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "prac_exp" ---
    # Run 'Begin Experiment' code from code_2
    count = 0
    tempnum = []
    num = 0
    exp_corr = []
    exp_rt = []
    prac_feedb = ''
    prac_feedbColor = ''
    prac_stimu = visual.TextStim(win=win, name='prac_stimu',
        text='',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    prac_blank = visual.TextStim(win=win, name='prac_blank',
        text=None,
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    prac_key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "prac_trial_fb" ---
    prac_feedb_text = visual.TextStim(win=win, name='prac_feedb_text',
        text='',
        font='STSong',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "prac_block_fb" ---
    # Run 'Begin Experiment' code from code_5
    block_feedb = ''
    prac_block_feedb_text = visual.TextStim(win=win, name='prac_block_feedb_text',
        text='',
        font='STSong',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    prac_block_fb_key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "rest" ---
    # Run 'Begin Experiment' code from code_6
    rest_text = ''
    rest_instr = visual.TextStim(win=win, name='rest_instr',
        text='',
        font='STSong',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    rest_key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "fixation" ---
    fix = visual.TextStim(win=win, name='fix',
        text='+',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "exp" ---
    # Run 'Begin Experiment' code from code
    count = 0
    tempnum = []
    num = 0
    exp_corr = []
    exp_rt = []
    prac_feedb = ''
    prac_feedbColor = ''
    stimu = visual.TextStim(win=win, name='stimu',
        text='',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    blank = visual.TextStim(win=win, name='blank',
        text=None,
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "block_fb" ---
    # Run 'Begin Experiment' code from code_3
    block_feedb = ''
    block_feedb_text = visual.TextStim(win=win, name='block_feedb_text',
        text='',
        font='STSong',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    block_fb_key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "thanks" ---
    endpage = visual.TextStim(win=win, name='endpage',
        text='实验结束。\n\n感谢您的参与！',
        font='STSong',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
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
    instr_key_resp.keys = []
    instr_key_resp.rt = []
    _instr_key_resp_allKeys = []
    # keep track of which components have finished
    instrComponents = [welpage, instr_key_resp]
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
        
        # *welpage* updates
        
        # if welpage is starting this frame...
        if welpage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welpage.frameNStart = frameN  # exact frame index
            welpage.tStart = t  # local t and not account for scr refresh
            welpage.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welpage, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welpage.started')
            # update status
            welpage.status = STARTED
            welpage.setAutoDraw(True)
        
        # if welpage is active this frame...
        if welpage.status == STARTED:
            # update params
            pass
        
        # *instr_key_resp* updates
        waitOnFlip = False
        
        # if instr_key_resp is starting this frame...
        if instr_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_key_resp.frameNStart = frameN  # exact frame index
            instr_key_resp.tStart = t  # local t and not account for scr refresh
            instr_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_key_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instr_key_resp.started')
            # update status
            instr_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instr_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instr_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instr_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = instr_key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _instr_key_resp_allKeys.extend(theseKeys)
            if len(_instr_key_resp_allKeys):
                instr_key_resp.keys = _instr_key_resp_allKeys[-1].name  # just the last key pressed
                instr_key_resp.rt = _instr_key_resp_allKeys[-1].rt
                instr_key_resp.duration = _instr_key_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
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
    if instr_key_resp.keys in ['', [], None]:  # No response was made
        instr_key_resp.keys = None
    thisExp.addData('instr_key_resp.keys',instr_key_resp.keys)
    if instr_key_resp.keys != None:  # we had a response
        thisExp.addData('instr_key_resp.rt', instr_key_resp.rt)
        thisExp.addData('instr_key_resp.duration', instr_key_resp.duration)
    thisExp.nextEntry()
    # the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instr_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instr_2.started', globalClock.getTime())
    instr_key_resp_2.keys = []
    instr_key_resp_2.rt = []
    _instr_key_resp_2_allKeys = []
    # keep track of which components have finished
    instr_2Components = [welpage_2, welpage_2_2, same_e_g, instr_key_resp_2]
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
        
        # *welpage_2* updates
        
        # if welpage_2 is starting this frame...
        if welpage_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welpage_2.frameNStart = frameN  # exact frame index
            welpage_2.tStart = t  # local t and not account for scr refresh
            welpage_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welpage_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welpage_2.started')
            # update status
            welpage_2.status = STARTED
            welpage_2.setAutoDraw(True)
        
        # if welpage_2 is active this frame...
        if welpage_2.status == STARTED:
            # update params
            pass
        
        # *welpage_2_2* updates
        
        # if welpage_2_2 is starting this frame...
        if welpage_2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welpage_2_2.frameNStart = frameN  # exact frame index
            welpage_2_2.tStart = t  # local t and not account for scr refresh
            welpage_2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welpage_2_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welpage_2_2.started')
            # update status
            welpage_2_2.status = STARTED
            welpage_2_2.setAutoDraw(True)
        
        # if welpage_2_2 is active this frame...
        if welpage_2_2.status == STARTED:
            # update params
            pass
        
        # *same_e_g* updates
        
        # if same_e_g is starting this frame...
        if same_e_g.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            same_e_g.frameNStart = frameN  # exact frame index
            same_e_g.tStart = t  # local t and not account for scr refresh
            same_e_g.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(same_e_g, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'same_e_g.started')
            # update status
            same_e_g.status = STARTED
            same_e_g.setAutoDraw(True)
        
        # if same_e_g is active this frame...
        if same_e_g.status == STARTED:
            # update params
            pass
        
        # *instr_key_resp_2* updates
        waitOnFlip = False
        
        # if instr_key_resp_2 is starting this frame...
        if instr_key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_key_resp_2.frameNStart = frameN  # exact frame index
            instr_key_resp_2.tStart = t  # local t and not account for scr refresh
            instr_key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_key_resp_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instr_key_resp_2.started')
            # update status
            instr_key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instr_key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instr_key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instr_key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = instr_key_resp_2.getKeys(keyList=['f'], ignoreKeys=["escape"], waitRelease=False)
            _instr_key_resp_2_allKeys.extend(theseKeys)
            if len(_instr_key_resp_2_allKeys):
                instr_key_resp_2.keys = _instr_key_resp_2_allKeys[-1].name  # just the last key pressed
                instr_key_resp_2.rt = _instr_key_resp_2_allKeys[-1].rt
                instr_key_resp_2.duration = _instr_key_resp_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
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
    if instr_key_resp_2.keys in ['', [], None]:  # No response was made
        instr_key_resp_2.keys = None
    thisExp.addData('instr_key_resp_2.keys',instr_key_resp_2.keys)
    if instr_key_resp_2.keys != None:  # we had a response
        thisExp.addData('instr_key_resp_2.rt', instr_key_resp_2.rt)
        thisExp.addData('instr_key_resp_2.duration', instr_key_resp_2.duration)
    thisExp.nextEntry()
    # the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instr_3" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instr_3.started', globalClock.getTime())
    instr_key_resp_3.keys = []
    instr_key_resp_3.rt = []
    _instr_key_resp_3_allKeys = []
    # keep track of which components have finished
    instr_3Components = [welpage_3, welpage_3_2, different_e_g, instr_key_resp_3]
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
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *welpage_3* updates
        
        # if welpage_3 is starting this frame...
        if welpage_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welpage_3.frameNStart = frameN  # exact frame index
            welpage_3.tStart = t  # local t and not account for scr refresh
            welpage_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welpage_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welpage_3.started')
            # update status
            welpage_3.status = STARTED
            welpage_3.setAutoDraw(True)
        
        # if welpage_3 is active this frame...
        if welpage_3.status == STARTED:
            # update params
            pass
        
        # *welpage_3_2* updates
        
        # if welpage_3_2 is starting this frame...
        if welpage_3_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welpage_3_2.frameNStart = frameN  # exact frame index
            welpage_3_2.tStart = t  # local t and not account for scr refresh
            welpage_3_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welpage_3_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welpage_3_2.started')
            # update status
            welpage_3_2.status = STARTED
            welpage_3_2.setAutoDraw(True)
        
        # if welpage_3_2 is active this frame...
        if welpage_3_2.status == STARTED:
            # update params
            pass
        
        # *different_e_g* updates
        
        # if different_e_g is starting this frame...
        if different_e_g.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            different_e_g.frameNStart = frameN  # exact frame index
            different_e_g.tStart = t  # local t and not account for scr refresh
            different_e_g.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(different_e_g, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'different_e_g.started')
            # update status
            different_e_g.status = STARTED
            different_e_g.setAutoDraw(True)
        
        # if different_e_g is active this frame...
        if different_e_g.status == STARTED:
            # update params
            pass
        
        # *instr_key_resp_3* updates
        waitOnFlip = False
        
        # if instr_key_resp_3 is starting this frame...
        if instr_key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_key_resp_3.frameNStart = frameN  # exact frame index
            instr_key_resp_3.tStart = t  # local t and not account for scr refresh
            instr_key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_key_resp_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instr_key_resp_3.started')
            # update status
            instr_key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instr_key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instr_key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instr_key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = instr_key_resp_3.getKeys(keyList=['j'], ignoreKeys=["escape"], waitRelease=False)
            _instr_key_resp_3_allKeys.extend(theseKeys)
            if len(_instr_key_resp_3_allKeys):
                instr_key_resp_3.keys = _instr_key_resp_3_allKeys[-1].name  # just the last key pressed
                instr_key_resp_3.rt = _instr_key_resp_3_allKeys[-1].rt
                instr_key_resp_3.duration = _instr_key_resp_3_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
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
    # check responses
    if instr_key_resp_3.keys in ['', [], None]:  # No response was made
        instr_key_resp_3.keys = None
    thisExp.addData('instr_key_resp_3.keys',instr_key_resp_3.keys)
    if instr_key_resp_3.keys != None:  # we had a response
        thisExp.addData('instr_key_resp_3.rt', instr_key_resp_3.rt)
        thisExp.addData('instr_key_resp_3.duration', instr_key_resp_3.duration)
    thisExp.nextEntry()
    # the Routine "instr_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instr_3_1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instr_3_1.started', globalClock.getTime())
    instr_key_resp_3_1.keys = []
    instr_key_resp_3_1.rt = []
    _instr_key_resp_3_1_allKeys = []
    # keep track of which components have finished
    instr_3_1Components = [welpage_3_1, instr_key_resp_3_1]
    for thisComponent in instr_3_1Components:
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
    
    # --- Run Routine "instr_3_1" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *welpage_3_1* updates
        
        # if welpage_3_1 is starting this frame...
        if welpage_3_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welpage_3_1.frameNStart = frameN  # exact frame index
            welpage_3_1.tStart = t  # local t and not account for scr refresh
            welpage_3_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welpage_3_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welpage_3_1.started')
            # update status
            welpage_3_1.status = STARTED
            welpage_3_1.setAutoDraw(True)
        
        # if welpage_3_1 is active this frame...
        if welpage_3_1.status == STARTED:
            # update params
            pass
        
        # *instr_key_resp_3_1* updates
        waitOnFlip = False
        
        # if instr_key_resp_3_1 is starting this frame...
        if instr_key_resp_3_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_key_resp_3_1.frameNStart = frameN  # exact frame index
            instr_key_resp_3_1.tStart = t  # local t and not account for scr refresh
            instr_key_resp_3_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_key_resp_3_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instr_key_resp_3_1.started')
            # update status
            instr_key_resp_3_1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instr_key_resp_3_1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instr_key_resp_3_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instr_key_resp_3_1.status == STARTED and not waitOnFlip:
            theseKeys = instr_key_resp_3_1.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _instr_key_resp_3_1_allKeys.extend(theseKeys)
            if len(_instr_key_resp_3_1_allKeys):
                instr_key_resp_3_1.keys = _instr_key_resp_3_1_allKeys[-1].name  # just the last key pressed
                instr_key_resp_3_1.rt = _instr_key_resp_3_1_allKeys[-1].rt
                instr_key_resp_3_1.duration = _instr_key_resp_3_1_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
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
        for thisComponent in instr_3_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instr_3_1" ---
    for thisComponent in instr_3_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instr_3_1.stopped', globalClock.getTime())
    # check responses
    if instr_key_resp_3_1.keys in ['', [], None]:  # No response was made
        instr_key_resp_3_1.keys = None
    thisExp.addData('instr_key_resp_3_1.keys',instr_key_resp_3_1.keys)
    if instr_key_resp_3_1.keys != None:  # we had a response
        thisExp.addData('instr_key_resp_3_1.rt', instr_key_resp_3_1.rt)
        thisExp.addData('instr_key_resp_3_1.duration', instr_key_resp_3_1.duration)
    thisExp.nextEntry()
    # the Routine "instr_3_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instr_4" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instr_4.started', globalClock.getTime())
    instr_key_resp_4.keys = []
    instr_key_resp_4.rt = []
    _instr_key_resp_4_allKeys = []
    # keep track of which components have finished
    instr_4Components = [welpage_4, instr_key_resp_4]
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
        
        # *welpage_4* updates
        
        # if welpage_4 is starting this frame...
        if welpage_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welpage_4.frameNStart = frameN  # exact frame index
            welpage_4.tStart = t  # local t and not account for scr refresh
            welpage_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welpage_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welpage_4.started')
            # update status
            welpage_4.status = STARTED
            welpage_4.setAutoDraw(True)
        
        # if welpage_4 is active this frame...
        if welpage_4.status == STARTED:
            # update params
            pass
        
        # *instr_key_resp_4* updates
        waitOnFlip = False
        
        # if instr_key_resp_4 is starting this frame...
        if instr_key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_key_resp_4.frameNStart = frameN  # exact frame index
            instr_key_resp_4.tStart = t  # local t and not account for scr refresh
            instr_key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_key_resp_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instr_key_resp_4.started')
            # update status
            instr_key_resp_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instr_key_resp_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instr_key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instr_key_resp_4.status == STARTED and not waitOnFlip:
            theseKeys = instr_key_resp_4.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _instr_key_resp_4_allKeys.extend(theseKeys)
            if len(_instr_key_resp_4_allKeys):
                instr_key_resp_4.keys = _instr_key_resp_4_allKeys[-1].name  # just the last key pressed
                instr_key_resp_4.rt = _instr_key_resp_4_allKeys[-1].rt
                instr_key_resp_4.duration = _instr_key_resp_4_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
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
    if instr_key_resp_4.keys in ['', [], None]:  # No response was made
        instr_key_resp_4.keys = None
    thisExp.addData('instr_key_resp_4.keys',instr_key_resp_4.keys)
    if instr_key_resp_4.keys != None:  # we had a response
        thisExp.addData('instr_key_resp_4.rt', instr_key_resp_4.rt)
        thisExp.addData('instr_key_resp_4.duration', instr_key_resp_4.duration)
    thisExp.nextEntry()
    # the Routine "instr_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    prac_block_loop = data.TrialHandler(nReps=999.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='prac_block_loop')
    thisExp.addLoop(prac_block_loop)  # add the loop to the experiment
    thisPrac_block_loop = prac_block_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_block_loop.rgb)
    if thisPrac_block_loop != None:
        for paramName in thisPrac_block_loop:
            globals()[paramName] = thisPrac_block_loop[paramName]
    
    for thisPrac_block_loop in prac_block_loop:
        currentLoop = prac_block_loop
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
        # abbreviate parameter names if possible (e.g. rgb = thisPrac_block_loop.rgb)
        if thisPrac_block_loop != None:
            for paramName in thisPrac_block_loop:
                globals()[paramName] = thisPrac_block_loop[paramName]
        
        # --- Prepare to start Routine "prac_rest" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('prac_rest.started', globalClock.getTime())
        # Run 'Begin Routine' code from code_4
        if prac_block_loop.thisN == 0:
            prac_rest_text = '如果您准备好了，请按空格键开始练习。'
        else:
            prac_rest_text = '练习实验的正确率需达到60%才能进入正式实验，\n\n没关系，再来练习一次吧！\n\n\n请按空格键开始练习。'
        prac_rest_instr.setText(prac_rest_text)
        prac_rest_key_resp.keys = []
        prac_rest_key_resp.rt = []
        _prac_rest_key_resp_allKeys = []
        # keep track of which components have finished
        prac_restComponents = [prac_rest_instr, prac_rest_key_resp]
        for thisComponent in prac_restComponents:
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
        
        # --- Run Routine "prac_rest" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *prac_rest_instr* updates
            
            # if prac_rest_instr is starting this frame...
            if prac_rest_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_rest_instr.frameNStart = frameN  # exact frame index
                prac_rest_instr.tStart = t  # local t and not account for scr refresh
                prac_rest_instr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_rest_instr, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_rest_instr.started')
                # update status
                prac_rest_instr.status = STARTED
                prac_rest_instr.setAutoDraw(True)
            
            # if prac_rest_instr is active this frame...
            if prac_rest_instr.status == STARTED:
                # update params
                pass
            
            # *prac_rest_key_resp* updates
            waitOnFlip = False
            
            # if prac_rest_key_resp is starting this frame...
            if prac_rest_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_rest_key_resp.frameNStart = frameN  # exact frame index
                prac_rest_key_resp.tStart = t  # local t and not account for scr refresh
                prac_rest_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_rest_key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_rest_key_resp.started')
                # update status
                prac_rest_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(prac_rest_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(prac_rest_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if prac_rest_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = prac_rest_key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _prac_rest_key_resp_allKeys.extend(theseKeys)
                if len(_prac_rest_key_resp_allKeys):
                    prac_rest_key_resp.keys = _prac_rest_key_resp_allKeys[-1].name  # just the last key pressed
                    prac_rest_key_resp.rt = _prac_rest_key_resp_allKeys[-1].rt
                    prac_rest_key_resp.duration = _prac_rest_key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
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
            for thisComponent in prac_restComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prac_rest" ---
        for thisComponent in prac_restComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('prac_rest.stopped', globalClock.getTime())
        # check responses
        if prac_rest_key_resp.keys in ['', [], None]:  # No response was made
            prac_rest_key_resp.keys = None
        prac_block_loop.addData('prac_rest_key_resp.keys',prac_rest_key_resp.keys)
        if prac_rest_key_resp.keys != None:  # we had a response
            prac_block_loop.addData('prac_rest_key_resp.rt', prac_rest_key_resp.rt)
            prac_block_loop.addData('prac_rest_key_resp.duration', prac_rest_key_resp.duration)
        # the Routine "prac_rest" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        prac_trials_loop = data.TrialHandler(nReps=6.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('trials_loop.xlsx'),
            seed=None, name='prac_trials_loop')
        thisExp.addLoop(prac_trials_loop)  # add the loop to the experiment
        thisPrac_trials_loop = prac_trials_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisPrac_trials_loop.rgb)
        if thisPrac_trials_loop != None:
            for paramName in thisPrac_trials_loop:
                globals()[paramName] = thisPrac_trials_loop[paramName]
        
        for thisPrac_trials_loop in prac_trials_loop:
            currentLoop = prac_trials_loop
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
            # abbreviate parameter names if possible (e.g. rgb = thisPrac_trials_loop.rgb)
            if thisPrac_trials_loop != None:
                for paramName in thisPrac_trials_loop:
                    globals()[paramName] = thisPrac_trials_loop[paramName]
            
            # --- Prepare to start Routine "prac_fixation" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('prac_fixation.started', globalClock.getTime())
            # keep track of which components have finished
            prac_fixationComponents = [prac_fix]
            for thisComponent in prac_fixationComponents:
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
            
            # --- Run Routine "prac_fixation" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *prac_fix* updates
                
                # if prac_fix is starting this frame...
                if prac_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    prac_fix.frameNStart = frameN  # exact frame index
                    prac_fix.tStart = t  # local t and not account for scr refresh
                    prac_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(prac_fix, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'prac_fix.started')
                    # update status
                    prac_fix.status = STARTED
                    prac_fix.setAutoDraw(True)
                
                # if prac_fix is active this frame...
                if prac_fix.status == STARTED:
                    # update params
                    pass
                
                # if prac_fix is stopping this frame...
                if prac_fix.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > prac_fix.tStartRefresh + 0.5-frameTolerance:
                        # keep track of stop time/frame for later
                        prac_fix.tStop = t  # not accounting for scr refresh
                        prac_fix.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'prac_fix.stopped')
                        # update status
                        prac_fix.status = FINISHED
                        prac_fix.setAutoDraw(False)
                
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
                for thisComponent in prac_fixationComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "prac_fixation" ---
            for thisComponent in prac_fixationComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('prac_fixation.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.500000)
            
            # --- Prepare to start Routine "prac_exp" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('prac_exp.started', globalClock.getTime())
            # Run 'Begin Routine' code from code_2
            numlist = [0,1,2,3,4,5,6,7,8,9]
            shuffle(numlist)
            num = numlist.pop()
            count = count + 1
            if count > 2:
                if cond == 'same':
                    num = tempnum[1]
                    tempnum.pop(1)
                if cond == 'different':
                    while num == tempnum[1]:
                        num = numlist.pop()
                    tempnum.pop(1)
                    
            
            prac_stimu.setText(num)
            prac_key_resp.keys = []
            prac_key_resp.rt = []
            _prac_key_resp_allKeys = []
            # keep track of which components have finished
            prac_expComponents = [prac_stimu, prac_blank, prac_key_resp]
            for thisComponent in prac_expComponents:
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
            
            # --- Run Routine "prac_exp" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *prac_stimu* updates
                
                # if prac_stimu is starting this frame...
                if prac_stimu.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    prac_stimu.frameNStart = frameN  # exact frame index
                    prac_stimu.tStart = t  # local t and not account for scr refresh
                    prac_stimu.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(prac_stimu, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'prac_stimu.started')
                    # update status
                    prac_stimu.status = STARTED
                    prac_stimu.setAutoDraw(True)
                
                # if prac_stimu is active this frame...
                if prac_stimu.status == STARTED:
                    # update params
                    pass
                
                # if prac_stimu is stopping this frame...
                if prac_stimu.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > prac_stimu.tStartRefresh + 0.5-frameTolerance:
                        # keep track of stop time/frame for later
                        prac_stimu.tStop = t  # not accounting for scr refresh
                        prac_stimu.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'prac_stimu.stopped')
                        # update status
                        prac_stimu.status = FINISHED
                        prac_stimu.setAutoDraw(False)
                
                # *prac_blank* updates
                
                # if prac_blank is starting this frame...
                if prac_blank.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    prac_blank.frameNStart = frameN  # exact frame index
                    prac_blank.tStart = t  # local t and not account for scr refresh
                    prac_blank.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(prac_blank, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'prac_blank.started')
                    # update status
                    prac_blank.status = STARTED
                    prac_blank.setAutoDraw(True)
                
                # if prac_blank is active this frame...
                if prac_blank.status == STARTED:
                    # update params
                    pass
                
                # if prac_blank is stopping this frame...
                if prac_blank.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > prac_blank.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        prac_blank.tStop = t  # not accounting for scr refresh
                        prac_blank.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'prac_blank.stopped')
                        # update status
                        prac_blank.status = FINISHED
                        prac_blank.setAutoDraw(False)
                
                # *prac_key_resp* updates
                waitOnFlip = False
                
                # if prac_key_resp is starting this frame...
                if prac_key_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    prac_key_resp.frameNStart = frameN  # exact frame index
                    prac_key_resp.tStart = t  # local t and not account for scr refresh
                    prac_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(prac_key_resp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'prac_key_resp.started')
                    # update status
                    prac_key_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(prac_key_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(prac_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                
                # if prac_key_resp is stopping this frame...
                if prac_key_resp.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > prac_key_resp.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        prac_key_resp.tStop = t  # not accounting for scr refresh
                        prac_key_resp.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'prac_key_resp.stopped')
                        # update status
                        prac_key_resp.status = FINISHED
                        prac_key_resp.status = FINISHED
                if prac_key_resp.status == STARTED and not waitOnFlip:
                    theseKeys = prac_key_resp.getKeys(keyList=['f','j'], ignoreKeys=["escape"], waitRelease=False)
                    _prac_key_resp_allKeys.extend(theseKeys)
                    if len(_prac_key_resp_allKeys):
                        prac_key_resp.keys = _prac_key_resp_allKeys[-1].name  # just the last key pressed
                        prac_key_resp.rt = _prac_key_resp_allKeys[-1].rt
                        prac_key_resp.duration = _prac_key_resp_allKeys[-1].duration
                        # was this correct?
                        if (prac_key_resp.keys == str(correctAns)) or (prac_key_resp.keys == correctAns):
                            prac_key_resp.corr = 1
                        else:
                            prac_key_resp.corr = 0
                
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
                for thisComponent in prac_expComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "prac_exp" ---
            for thisComponent in prac_expComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('prac_exp.stopped', globalClock.getTime())
            # Run 'End Routine' code from code_2
            if count > 2:
                if not prac_key_resp.keys:
                    prac_feedb = '太慢!'
                    prac_key_resp.corr = 0
                elif prac_key_resp.corr == 1:
                    prac_feedb = '正确!'
                    prac_feedbColor = 'green'
                    exp_rt.insert(0,prac_key_resp.rt)
                else:
                    prac_feedb = '错误!'
                    prac_feedbColor = 'red'
                exp_corr.insert(0,prac_key_resp.corr)
            
            tempnum.insert(0,num)
            thisExp.addData('stimuli',num)
            thisExp.addData('exp_corr',exp_corr)
            thisExp.addData('prac_feedb_text',prac_feedb)
            # check responses
            if prac_key_resp.keys in ['', [], None]:  # No response was made
                prac_key_resp.keys = None
                # was no response the correct answer?!
                if str(correctAns).lower() == 'none':
                   prac_key_resp.corr = 1;  # correct non-response
                else:
                   prac_key_resp.corr = 0;  # failed to respond (incorrectly)
            # store data for prac_trials_loop (TrialHandler)
            prac_trials_loop.addData('prac_key_resp.keys',prac_key_resp.keys)
            prac_trials_loop.addData('prac_key_resp.corr', prac_key_resp.corr)
            if prac_key_resp.keys != None:  # we had a response
                prac_trials_loop.addData('prac_key_resp.rt', prac_key_resp.rt)
                prac_trials_loop.addData('prac_key_resp.duration', prac_key_resp.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.500000)
            
            # --- Prepare to start Routine "prac_trial_fb" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('prac_trial_fb.started', globalClock.getTime())
            prac_feedb_text.setColor(prac_feedbColor, colorSpace='rgb')
            prac_feedb_text.setText(prac_feedb)
            # keep track of which components have finished
            prac_trial_fbComponents = [prac_feedb_text]
            for thisComponent in prac_trial_fbComponents:
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
            
            # --- Run Routine "prac_trial_fb" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *prac_feedb_text* updates
                
                # if prac_feedb_text is starting this frame...
                if prac_feedb_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    prac_feedb_text.frameNStart = frameN  # exact frame index
                    prac_feedb_text.tStart = t  # local t and not account for scr refresh
                    prac_feedb_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(prac_feedb_text, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'prac_feedb_text.started')
                    # update status
                    prac_feedb_text.status = STARTED
                    prac_feedb_text.setAutoDraw(True)
                
                # if prac_feedb_text is active this frame...
                if prac_feedb_text.status == STARTED:
                    # update params
                    pass
                
                # if prac_feedb_text is stopping this frame...
                if prac_feedb_text.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > prac_feedb_text.tStartRefresh + 0.5-frameTolerance:
                        # keep track of stop time/frame for later
                        prac_feedb_text.tStop = t  # not accounting for scr refresh
                        prac_feedb_text.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'prac_feedb_text.stopped')
                        # update status
                        prac_feedb_text.status = FINISHED
                        prac_feedb_text.setAutoDraw(False)
                
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
                for thisComponent in prac_trial_fbComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "prac_trial_fb" ---
            for thisComponent in prac_trial_fbComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('prac_trial_fb.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.500000)
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 6.0 repeats of 'prac_trials_loop'
        
        
        # --- Prepare to start Routine "prac_block_fb" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('prac_block_fb.started', globalClock.getTime())
        # Run 'Begin Routine' code from code_5
        exp_acc = (sum(exp_corr) / len(exp_corr)) * 100
        
        if len(exp_rt) == 0:
            block_feedb = '您的正确率为0。\n请确保明白实验规则再继续实验。\n\n\n请按空格键继续。'
        else:
            exp_meanRT = sum(exp_rt)/len(exp_rt)
            block_feedb = '您的正确率为%.2f%%\n您的平均反应时为%.2f秒\n\n\n请按空格键继续。'%(exp_acc,exp_meanRT)
        
        
        prac_block_feedb_text.setText(block_feedb)
        prac_block_fb_key_resp.keys = []
        prac_block_fb_key_resp.rt = []
        _prac_block_fb_key_resp_allKeys = []
        # keep track of which components have finished
        prac_block_fbComponents = [prac_block_feedb_text, prac_block_fb_key_resp]
        for thisComponent in prac_block_fbComponents:
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
        
        # --- Run Routine "prac_block_fb" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *prac_block_feedb_text* updates
            
            # if prac_block_feedb_text is starting this frame...
            if prac_block_feedb_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_block_feedb_text.frameNStart = frameN  # exact frame index
                prac_block_feedb_text.tStart = t  # local t and not account for scr refresh
                prac_block_feedb_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_block_feedb_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_block_feedb_text.started')
                # update status
                prac_block_feedb_text.status = STARTED
                prac_block_feedb_text.setAutoDraw(True)
            
            # if prac_block_feedb_text is active this frame...
            if prac_block_feedb_text.status == STARTED:
                # update params
                pass
            
            # *prac_block_fb_key_resp* updates
            waitOnFlip = False
            
            # if prac_block_fb_key_resp is starting this frame...
            if prac_block_fb_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_block_fb_key_resp.frameNStart = frameN  # exact frame index
                prac_block_fb_key_resp.tStart = t  # local t and not account for scr refresh
                prac_block_fb_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_block_fb_key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_block_fb_key_resp.started')
                # update status
                prac_block_fb_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(prac_block_fb_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(prac_block_fb_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if prac_block_fb_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = prac_block_fb_key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _prac_block_fb_key_resp_allKeys.extend(theseKeys)
                if len(_prac_block_fb_key_resp_allKeys):
                    prac_block_fb_key_resp.keys = _prac_block_fb_key_resp_allKeys[-1].name  # just the last key pressed
                    prac_block_fb_key_resp.rt = _prac_block_fb_key_resp_allKeys[-1].rt
                    prac_block_fb_key_resp.duration = _prac_block_fb_key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
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
            for thisComponent in prac_block_fbComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prac_block_fb" ---
        for thisComponent in prac_block_fbComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('prac_block_fb.stopped', globalClock.getTime())
        # Run 'End Routine' code from code_5
        count = 0
        exp_corr = []
        exp_rt = []
        prac_feedb = ''
        
        if exp_acc >= 60:
            prac_block_loop.finished = True
            
        # check responses
        if prac_block_fb_key_resp.keys in ['', [], None]:  # No response was made
            prac_block_fb_key_resp.keys = None
        prac_block_loop.addData('prac_block_fb_key_resp.keys',prac_block_fb_key_resp.keys)
        if prac_block_fb_key_resp.keys != None:  # we had a response
            prac_block_loop.addData('prac_block_fb_key_resp.rt', prac_block_fb_key_resp.rt)
            prac_block_loop.addData('prac_block_fb_key_resp.duration', prac_block_fb_key_resp.duration)
        # the Routine "prac_block_fb" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 999.0 repeats of 'prac_block_loop'
    
    
    # set up handler to look after randomisation of conditions etc
    block_loop = data.TrialHandler(nReps=2.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='block_loop')
    thisExp.addLoop(block_loop)  # add the loop to the experiment
    thisBlock_loop = block_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisBlock_loop.rgb)
    if thisBlock_loop != None:
        for paramName in thisBlock_loop:
            globals()[paramName] = thisBlock_loop[paramName]
    
    for thisBlock_loop in block_loop:
        currentLoop = block_loop
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
        # abbreviate parameter names if possible (e.g. rgb = thisBlock_loop.rgb)
        if thisBlock_loop != None:
            for paramName in thisBlock_loop:
                globals()[paramName] = thisBlock_loop[paramName]
        
        # --- Prepare to start Routine "rest" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('rest.started', globalClock.getTime())
        # Run 'Begin Routine' code from code_6
        if block_loop.thisN == 0:
            rest_text = '做得好！练习结束了。\n\n让我们开始正式实验吧。\n请注意，正式实验中不再提供正误反馈。\n\n记得，在看到数字后立即做出反应，\n试着在保证正确的同时尽可能快地回答。\n\n\n请按空格键继续。'
        else:
            rest_text = '做得好！休息一下吧。\n\n休息好后，请按空格键继续实验。\n\n后面实验的要求与之前是一样的。'
        rest_instr.setText(rest_text)
        rest_key_resp.keys = []
        rest_key_resp.rt = []
        _rest_key_resp_allKeys = []
        # keep track of which components have finished
        restComponents = [rest_instr, rest_key_resp]
        for thisComponent in restComponents:
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
        
        # --- Run Routine "rest" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *rest_instr* updates
            
            # if rest_instr is starting this frame...
            if rest_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rest_instr.frameNStart = frameN  # exact frame index
                rest_instr.tStart = t  # local t and not account for scr refresh
                rest_instr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rest_instr, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rest_instr.started')
                # update status
                rest_instr.status = STARTED
                rest_instr.setAutoDraw(True)
            
            # if rest_instr is active this frame...
            if rest_instr.status == STARTED:
                # update params
                pass
            
            # *rest_key_resp* updates
            waitOnFlip = False
            
            # if rest_key_resp is starting this frame...
            if rest_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rest_key_resp.frameNStart = frameN  # exact frame index
                rest_key_resp.tStart = t  # local t and not account for scr refresh
                rest_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rest_key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rest_key_resp.started')
                # update status
                rest_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(rest_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(rest_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if rest_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = rest_key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _rest_key_resp_allKeys.extend(theseKeys)
                if len(_rest_key_resp_allKeys):
                    rest_key_resp.keys = _rest_key_resp_allKeys[-1].name  # just the last key pressed
                    rest_key_resp.rt = _rest_key_resp_allKeys[-1].rt
                    rest_key_resp.duration = _rest_key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
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
            for thisComponent in restComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "rest" ---
        for thisComponent in restComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('rest.stopped', globalClock.getTime())
        # check responses
        if rest_key_resp.keys in ['', [], None]:  # No response was made
            rest_key_resp.keys = None
        block_loop.addData('rest_key_resp.keys',rest_key_resp.keys)
        if rest_key_resp.keys != None:  # we had a response
            block_loop.addData('rest_key_resp.rt', rest_key_resp.rt)
            block_loop.addData('rest_key_resp.duration', rest_key_resp.duration)
        # the Routine "rest" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        trials_loop = data.TrialHandler(nReps=6.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('trials_loop.xlsx'),
            seed=None, name='trials_loop')
        thisExp.addLoop(trials_loop)  # add the loop to the experiment
        thisTrials_loop = trials_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_loop.rgb)
        if thisTrials_loop != None:
            for paramName in thisTrials_loop:
                globals()[paramName] = thisTrials_loop[paramName]
        
        for thisTrials_loop in trials_loop:
            currentLoop = trials_loop
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
            # abbreviate parameter names if possible (e.g. rgb = thisTrials_loop.rgb)
            if thisTrials_loop != None:
                for paramName in thisTrials_loop:
                    globals()[paramName] = thisTrials_loop[paramName]
            
            # --- Prepare to start Routine "fixation" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('fixation.started', globalClock.getTime())
            # keep track of which components have finished
            fixationComponents = [fix]
            for thisComponent in fixationComponents:
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
            
            # --- Run Routine "fixation" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *fix* updates
                
                # if fix is starting this frame...
                if fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    fix.frameNStart = frameN  # exact frame index
                    fix.tStart = t  # local t and not account for scr refresh
                    fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fix, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fix.started')
                    # update status
                    fix.status = STARTED
                    fix.setAutoDraw(True)
                
                # if fix is active this frame...
                if fix.status == STARTED:
                    # update params
                    pass
                
                # if fix is stopping this frame...
                if fix.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > fix.tStartRefresh + 0.5-frameTolerance:
                        # keep track of stop time/frame for later
                        fix.tStop = t  # not accounting for scr refresh
                        fix.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'fix.stopped')
                        # update status
                        fix.status = FINISHED
                        fix.setAutoDraw(False)
                
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
                for thisComponent in fixationComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "fixation" ---
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('fixation.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.500000)
            
            # --- Prepare to start Routine "exp" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('exp.started', globalClock.getTime())
            # Run 'Begin Routine' code from code
            numlist = [0,1,2,3,4,5,6,7,8,9]
            shuffle(numlist)
            num = numlist.pop()
            count = count + 1
            if count > 2:
                if cond == 'same':
                    num = tempnum[1]
                    tempnum.pop(1)
                if cond == 'different':
                    while num == tempnum[1]:
                        num = numlist.pop()
                    tempnum.pop(1)
                    
            
            stimu.setText(num)
            key_resp.keys = []
            key_resp.rt = []
            _key_resp_allKeys = []
            # keep track of which components have finished
            expComponents = [stimu, blank, key_resp]
            for thisComponent in expComponents:
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
            
            # --- Run Routine "exp" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.5:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *stimu* updates
                
                # if stimu is starting this frame...
                if stimu.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    stimu.frameNStart = frameN  # exact frame index
                    stimu.tStart = t  # local t and not account for scr refresh
                    stimu.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stimu, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stimu.started')
                    # update status
                    stimu.status = STARTED
                    stimu.setAutoDraw(True)
                
                # if stimu is active this frame...
                if stimu.status == STARTED:
                    # update params
                    pass
                
                # if stimu is stopping this frame...
                if stimu.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > stimu.tStartRefresh + 0.5-frameTolerance:
                        # keep track of stop time/frame for later
                        stimu.tStop = t  # not accounting for scr refresh
                        stimu.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'stimu.stopped')
                        # update status
                        stimu.status = FINISHED
                        stimu.setAutoDraw(False)
                
                # *blank* updates
                
                # if blank is starting this frame...
                if blank.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    blank.frameNStart = frameN  # exact frame index
                    blank.tStart = t  # local t and not account for scr refresh
                    blank.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(blank, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'blank.started')
                    # update status
                    blank.status = STARTED
                    blank.setAutoDraw(True)
                
                # if blank is active this frame...
                if blank.status == STARTED:
                    # update params
                    pass
                
                # if blank is stopping this frame...
                if blank.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > blank.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        blank.tStop = t  # not accounting for scr refresh
                        blank.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'blank.stopped')
                        # update status
                        blank.status = FINISHED
                        blank.setAutoDraw(False)
                
                # *key_resp* updates
                waitOnFlip = False
                
                # if key_resp is starting this frame...
                if key_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
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
                
                # if key_resp is stopping this frame...
                if key_resp.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp.tStartRefresh + 1.5-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp.tStop = t  # not accounting for scr refresh
                        key_resp.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp.stopped')
                        # update status
                        key_resp.status = FINISHED
                        key_resp.status = FINISHED
                if key_resp.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp.getKeys(keyList=['f','j'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_allKeys.extend(theseKeys)
                    if len(_key_resp_allKeys):
                        key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                        key_resp.rt = _key_resp_allKeys[-1].rt
                        key_resp.duration = _key_resp_allKeys[-1].duration
                        # was this correct?
                        if (key_resp.keys == str(correctAns)) or (key_resp.keys == correctAns):
                            key_resp.corr = 1
                        else:
                            key_resp.corr = 0
                
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
                for thisComponent in expComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "exp" ---
            for thisComponent in expComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('exp.stopped', globalClock.getTime())
            # Run 'End Routine' code from code
            if count > 2:
                if not key_resp.keys:
                    prac_feedb = '太慢!'
                    key_resp.corr = 0
                elif key_resp.corr == 1:
                    prac_feedb = '正确!'
                    prac_feedbColor = 'green'
                    exp_rt.insert(0,key_resp.rt)
                else:
                    prac_feedb = '错误!'
                    prac_feedbColor = 'red'
                exp_corr.insert(0,key_resp.corr)
            
            tempnum.insert(0,num)
            thisExp.addData('stimuli',num)
            thisExp.addData('exp_corr',exp_corr)
            # check responses
            if key_resp.keys in ['', [], None]:  # No response was made
                key_resp.keys = None
                # was no response the correct answer?!
                if str(correctAns).lower() == 'none':
                   key_resp.corr = 1;  # correct non-response
                else:
                   key_resp.corr = 0;  # failed to respond (incorrectly)
            # store data for trials_loop (TrialHandler)
            trials_loop.addData('key_resp.keys',key_resp.keys)
            trials_loop.addData('key_resp.corr', key_resp.corr)
            if key_resp.keys != None:  # we had a response
                trials_loop.addData('key_resp.rt', key_resp.rt)
                trials_loop.addData('key_resp.duration', key_resp.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.500000)
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 6.0 repeats of 'trials_loop'
        
        
        # --- Prepare to start Routine "block_fb" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('block_fb.started', globalClock.getTime())
        # Run 'Begin Routine' code from code_3
        exp_acc = (sum(exp_corr) / len(exp_corr)) * 100
        
        if len(exp_rt) == 0:
            block_feedb = '您的正确率为0。\n请确保明白实验规则再继续实验。\n\n\n请按空格键继续。'
        else:
            exp_meanRT = sum(exp_rt)/len(exp_rt)
            block_feedb = '您的正确率为%.2f%%\n您的平均反应时为%.2f秒\n\n\n请按空格键继续。'%(exp_acc,exp_meanRT)
        block_feedb_text.setText(block_feedb)
        block_fb_key_resp.keys = []
        block_fb_key_resp.rt = []
        _block_fb_key_resp_allKeys = []
        # keep track of which components have finished
        block_fbComponents = [block_feedb_text, block_fb_key_resp]
        for thisComponent in block_fbComponents:
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
        
        # --- Run Routine "block_fb" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *block_feedb_text* updates
            
            # if block_feedb_text is starting this frame...
            if block_feedb_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                block_feedb_text.frameNStart = frameN  # exact frame index
                block_feedb_text.tStart = t  # local t and not account for scr refresh
                block_feedb_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(block_feedb_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'block_feedb_text.started')
                # update status
                block_feedb_text.status = STARTED
                block_feedb_text.setAutoDraw(True)
            
            # if block_feedb_text is active this frame...
            if block_feedb_text.status == STARTED:
                # update params
                pass
            
            # *block_fb_key_resp* updates
            waitOnFlip = False
            
            # if block_fb_key_resp is starting this frame...
            if block_fb_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                block_fb_key_resp.frameNStart = frameN  # exact frame index
                block_fb_key_resp.tStart = t  # local t and not account for scr refresh
                block_fb_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(block_fb_key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'block_fb_key_resp.started')
                # update status
                block_fb_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(block_fb_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(block_fb_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if block_fb_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = block_fb_key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _block_fb_key_resp_allKeys.extend(theseKeys)
                if len(_block_fb_key_resp_allKeys):
                    block_fb_key_resp.keys = _block_fb_key_resp_allKeys[-1].name  # just the last key pressed
                    block_fb_key_resp.rt = _block_fb_key_resp_allKeys[-1].rt
                    block_fb_key_resp.duration = _block_fb_key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
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
            for thisComponent in block_fbComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "block_fb" ---
        for thisComponent in block_fbComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('block_fb.stopped', globalClock.getTime())
        # Run 'End Routine' code from code_3
        count = 0
        exp_corr = []
        exp_rt = []
        # check responses
        if block_fb_key_resp.keys in ['', [], None]:  # No response was made
            block_fb_key_resp.keys = None
        block_loop.addData('block_fb_key_resp.keys',block_fb_key_resp.keys)
        if block_fb_key_resp.keys != None:  # we had a response
            block_loop.addData('block_fb_key_resp.rt', block_fb_key_resp.rt)
            block_loop.addData('block_fb_key_resp.duration', block_fb_key_resp.duration)
        # the Routine "block_fb" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 2.0 repeats of 'block_loop'
    
    
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
