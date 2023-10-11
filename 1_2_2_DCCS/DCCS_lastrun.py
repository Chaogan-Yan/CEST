#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.2),
    on Tue Oct 10 23:29:05 2023
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
expName = 'DCCS'  # from the Builder filename that created this script
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
    filename = u'data/1_2_2_%s_%s_%s' % (expName, expInfo['编号'], expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/chen-nanwu/Desktop/CEST_v2/1_2_2_DCCS/DCCS_lastrun.py',
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
    
    # --- Initialize components for Routine "dummy" ---
    sound_4 = sound.Sound('resources/audio/F-a.mp3', secs=1.0, stereo=True, hamming=True,
        name='sound_4')
    sound_4.setVolume(1.0)
    sound_5 = sound.Sound('resources/audio/F-d.mp3', secs=1.0, stereo=True, hamming=True,
        name='sound_5')
    sound_5.setVolume(1.0)
    sound_6 = sound.Sound('resources/audio/F-b.mp3', secs=1.0, stereo=True, hamming=True,
        name='sound_6')
    sound_6.setVolume(1.0)
    sound_7 = sound.Sound('resources/audio/F-d1.mp3', secs=1.0, stereo=True, hamming=True,
        name='sound_7')
    sound_7.setVolume(1.0)
    sound_8 = sound.Sound('resources/audio/F-e.mp3', secs=1.0, stereo=True, hamming=True,
        name='sound_8')
    sound_8.setVolume(1.0)
    sound_12 = sound.Sound('resources/audio/F-g.mp3', secs=1.0, stereo=True, hamming=True,
        name='sound_12')
    sound_12.setVolume(1.0)
    
    # --- Initialize components for Routine "instruction_1" ---
    text_homebase = visual.TextStim(win=win, name='text_homebase',
        text='欢迎您参加本任务。\n\n在这个任务中，我们将进行“颜色或形状”匹配游戏，\n\n但首先，让我们先学习一下按键，请把您的左手食指\n\n放在Z键上，并把右手食指放在M键上。\n\n\n按空格键继续。',
        font='Heiti SC',
        pos=(0, 0), height=0.035, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-1.0);
    wecomle_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "ShapeBoatEx" ---
    textBoat = visual.TextStim(win=win, name='textBoat',
        text='首先是“形状”匹配游戏，在这个环节中，通过左右手按键，\n选择与中心图片形状相同的选项，如果中心图片是“帆船”，\n请通过按键M选择右侧的“帆船”选项。',
        font='Heiti SC',
        pos=(0, 0.36), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    stimulus = visual.ImageStim(
        win=win,
        name='stimulus', 
        image='resources/assets/RedBoat.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.15), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_2 = visual.ImageStim(
        win=win,
        name='image_2', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_3 = visual.ImageStim(
        win=win,
        name='image_3', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    image_12 = visual.ImageStim(
        win=win,
        name='image_12', 
        image='resources/assets/BlueBoatGreen.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-4.0)
    image_13 = visual.ImageStim(
        win=win,
        name='image_13', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-5.0)
    image_14 = visual.ImageStim(
        win=win,
        name='image_14', 
        image='resources/assets/BlueBoatGreen.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-6.0)
    key_resp_8 = keyboard.Keyboard()
    text_11 = visual.TextStim(win=win, name='text_11',
        text='按M键继续',
        font='Heiti SC',
        pos=(0, -0.4), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-8.0);
    
    # --- Initialize components for Routine "ShapeRabbitEx" ---
    text = visual.TextStim(win=win, name='text',
        text='如果中心图片是“兔子”，请通过按键Z选择左侧的“兔子”选项。',
        font='heiti sc',
        pos=(0, 0.35), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    image = visual.ImageStim(
        win=win,
        name='image', 
        image='resources/assets/BlueRabbit.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.15), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_10 = visual.ImageStim(
        win=win,
        name='image_10', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_4 = visual.ImageStim(
        win=win,
        name='image_4', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    image_15 = visual.ImageStim(
        win=win,
        name='image_15', 
        image='resources/assets/RedRabbitGreen.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-4.0)
    image_16 = visual.ImageStim(
        win=win,
        name='image_16', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-5.0)
    image_17 = visual.ImageStim(
        win=win,
        name='image_17', 
        image='resources/assets/RedRabbitGreen.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-6.0)
    key_resp_7 = keyboard.Keyboard()
    text_10 = visual.TextStim(win=win, name='text_10',
        text='按Z键继续',
        font='heiti sc',
        pos=(0, -0.4), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-8.0);
    
    # --- Initialize components for Routine "Instructions" ---
    image_5 = visual.ImageStim(
        win=win,
        name='image_5', 
        image='resources/assets/star_text.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.9, 0.6),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    key_resp_2 = keyboard.Keyboard()
    sound_2 = sound.Sound('resources/audio/F11.mp3', secs=-1, stereo=True, hamming=True,
        name='sound_2')
    sound_2.setVolume(1.0)
    
    # --- Initialize components for Routine "InterTrial_Intreval" ---
    image_6 = visual.ImageStim(
        win=win,
        name='image_6', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_7 = visual.ImageStim(
        win=win,
        name='image_7', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "ISIcode" ---
    
    # --- Initialize components for Routine "Fixation" ---
    image_8 = visual.ImageStim(
        win=win,
        name='image_8', 
        image='resources/assets/star.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.1), size=(0.05, 0.05),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_9 = visual.ImageStim(
        win=win,
        name='image_9', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_37 = visual.ImageStim(
        win=win,
        name='image_37', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "CueShape" ---
    text_14 = visual.TextStim(win=win, name='text_14',
        text='形状',
        font='heiti sc',
        pos=(0, .1), height=0.04, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    image_38 = visual.ImageStim(
        win=win,
        name='image_38', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_39 = visual.ImageStim(
        win=win,
        name='image_39', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "Stim" ---
    image_40 = visual.ImageStim(
        win=win,
        name='image_40', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_41 = visual.ImageStim(
        win=win,
        name='image_41', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_42 = visual.ImageStim(
        win=win,
        name='image_42', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    key_resp_3 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Feedback" ---
    image_43 = visual.ImageStim(
        win=win,
        name='image_43', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_44 = visual.ImageStim(
        win=win,
        name='image_44', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_45 = visual.ImageStim(
        win=win,
        name='image_45', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    sound_9 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
        name='sound_9')
    sound_9.setVolume(1.0)
    
    # --- Initialize components for Routine "UpdateAccuracy" ---
    # Run 'Begin Experiment' code from code
    counterOne = 0
    counterTwo = 0
    
    # --- Initialize components for Routine "continueStatus" ---
    # Run 'Begin Experiment' code from code_11
    isForward = 0
    text_24 = visual.TextStim(win=win, name='text_24',
        text='',
        font='heiti sc',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-1.0);
    key_resp_18 = keyboard.Keyboard()
    sound_10 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
        name='sound_10')
    sound_10.setVolume(1.0)
    
    # --- Initialize components for Routine "ColorRedEx" ---
    text_7 = visual.TextStim(win=win, name='text_7',
        text='另一部分是“颜色”匹配游戏，在这个环节中，通过左右手按键，\n选择与中心图片颜色相同的选项，如果中心图片是“红色”，\n请通过按键Z选择下方左侧的“红色”选项。',
        font='heiti sc',
        pos=(0, 0.36), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    image_18 = visual.ImageStim(
        win=win,
        name='image_18', 
        image='resources/assets/RedBoat.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.15), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_20 = visual.ImageStim(
        win=win,
        name='image_20', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_19 = visual.ImageStim(
        win=win,
        name='image_19', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    image_21 = visual.ImageStim(
        win=win,
        name='image_21', 
        image='resources/assets/RedRabbitRed.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-4.0)
    image_22 = visual.ImageStim(
        win=win,
        name='image_22', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-5.0)
    image_23 = visual.ImageStim(
        win=win,
        name='image_23', 
        image='resources/assets/RedRabbitRed.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-6.0)
    key_resp_9 = keyboard.Keyboard()
    text_12 = visual.TextStim(win=win, name='text_12',
        text='按Z键继续',
        font='heiti sc',
        pos=(0, -0.4), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-8.0);
    
    # --- Initialize components for Routine "ColorBlueEx" ---
    text_8 = visual.TextStim(win=win, name='text_8',
        text='如果中心图片是“蓝色”，请通过按键M选择下方右侧的“蓝色”选项。',
        font='heiti sc',
        pos=(0, 0.41), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    image_24 = visual.ImageStim(
        win=win,
        name='image_24', 
        image='resources/assets/BlueRabbit.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_25 = visual.ImageStim(
        win=win,
        name='image_25', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_26 = visual.ImageStim(
        win=win,
        name='image_26', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    image_27 = visual.ImageStim(
        win=win,
        name='image_27', 
        image='resources/assets/BlueBoatRed.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-4.0)
    image_28 = visual.ImageStim(
        win=win,
        name='image_28', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-5.0)
    image_29 = visual.ImageStim(
        win=win,
        name='image_29', 
        image='resources/assets/BlueBoatRed.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-6.0)
    key_resp_10 = keyboard.Keyboard()
    text_13 = visual.TextStim(win=win, name='text_13',
        text='按M键继续',
        font='heiti sc',
        pos=(0, -0.4), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-8.0);
    
    # --- Initialize components for Routine "Instructions" ---
    image_5 = visual.ImageStim(
        win=win,
        name='image_5', 
        image='resources/assets/star_text.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.9, 0.6),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    key_resp_2 = keyboard.Keyboard()
    sound_2 = sound.Sound('resources/audio/F11.mp3', secs=-1, stereo=True, hamming=True,
        name='sound_2')
    sound_2.setVolume(1.0)
    
    # --- Initialize components for Routine "InterTrial_Intreval" ---
    image_6 = visual.ImageStim(
        win=win,
        name='image_6', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_7 = visual.ImageStim(
        win=win,
        name='image_7', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "ISIcode" ---
    
    # --- Initialize components for Routine "Fixation" ---
    image_8 = visual.ImageStim(
        win=win,
        name='image_8', 
        image='resources/assets/star.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.1), size=(0.05, 0.05),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_9 = visual.ImageStim(
        win=win,
        name='image_9', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_37 = visual.ImageStim(
        win=win,
        name='image_37', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "CueColor" ---
    text_16 = visual.TextStim(win=win, name='text_16',
        text='颜色',
        font='heiti sc',
        pos=(0, 0.1), height=0.04, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    image_46 = visual.ImageStim(
        win=win,
        name='image_46', 
        image='resources/assets/RedRabbitWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_47 = visual.ImageStim(
        win=win,
        name='image_47', 
        image='resources/assets/BlueBoatWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "Stim2" ---
    image_58 = visual.ImageStim(
        win=win,
        name='image_58', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_59 = visual.ImageStim(
        win=win,
        name='image_59', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_60 = visual.ImageStim(
        win=win,
        name='image_60', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    key_resp_12 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Feedback2" ---
    image_61 = visual.ImageStim(
        win=win,
        name='image_61', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_62 = visual.ImageStim(
        win=win,
        name='image_62', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_63 = visual.ImageStim(
        win=win,
        name='image_63', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    sound_1 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
        name='sound_1')
    sound_1.setVolume(1.0)
    
    # --- Initialize components for Routine "UpdateAccuracy2" ---
    # Run 'Begin Experiment' code from code_7
    counterOne = 0
    counterTwo = 0
    
    # --- Initialize components for Routine "ContStatus2" ---
    # Run 'Begin Experiment' code from code_4
    isForward = 0
    
    text_17 = visual.TextStim(win=win, name='text_17',
        text='',
        font='heiti sc',
        pos=(0, 0.1), height=0.04, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-1.0);
    key_resp_16 = keyboard.Keyboard()
    sound_11 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
        name='sound_11')
    sound_11.setVolume(1.0)
    
    # --- Initialize components for Routine "CombInstructions" ---
    MainTaskPrompt = visual.TextStim(win=win, name='MainTaskPrompt',
        text='现在，我们将两个环节合并。\n请记住，如果提示词是“形状”，请选择和中心图形形状一样的选项；\n如果提示词是“颜色”，请选择和中心图形颜色一样的选项；\n\n还有，请保持左手食指在Z键上，右手食指在M键上。\n\n\n按空格键继续。\n',
        font='heiti sc',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_4 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Instructions2" ---
    image_11 = visual.ImageStim(
        win=win,
        name='image_11', 
        image='resources/assets/star_text_formal.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.9, 0.6),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    key_resp = keyboard.Keyboard()
    sound_3 = sound.Sound('resources/audio/F12.mp3', secs=-1, stereo=True, hamming=True,
        name='sound_3')
    sound_3.setVolume(1.0)
    
    # --- Initialize components for Routine "countReset" ---
    
    # --- Initialize components for Routine "ITI_Comb" ---
    image_65 = visual.ImageStim(
        win=win,
        name='image_65', 
        image='resources/assets/BlueBallWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_66 = visual.ImageStim(
        win=win,
        name='image_66', 
        image='resources/assets/YellowTruckWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "ISIcode" ---
    
    # --- Initialize components for Routine "FixationComb_2" ---
    image_67 = visual.ImageStim(
        win=win,
        name='image_67', 
        image='resources/assets/star.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.1), size=(0.05, 0.05),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_68 = visual.ImageStim(
        win=win,
        name='image_68', 
        image='resources/assets/BlueBallWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_69 = visual.ImageStim(
        win=win,
        name='image_69', 
        image='resources/assets/YellowTruckWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "cueComb_3" ---
    image_75 = visual.ImageStim(
        win=win,
        name='image_75', 
        image='resources/assets/BlueBallWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_76 = visual.ImageStim(
        win=win,
        name='image_76', 
        image='resources/assets/YellowTruckWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    text_21 = visual.TextStim(win=win, name='text_21',
        text='',
        font='heiti sc',
        pos=(0, 0.1), height=0.04, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-2.0);
    
    # --- Initialize components for Routine "PracticeComb_2" ---
    image_72 = visual.ImageStim(
        win=win,
        name='image_72', 
        image='default.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.15), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_73 = visual.ImageStim(
        win=win,
        name='image_73', 
        image='resources/assets/BlueBallWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_74 = visual.ImageStim(
        win=win,
        name='image_74', 
        image='resources/assets/YellowTruckWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    key_resp_13 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "stopColorLoop" ---
    
    # --- Initialize components for Routine "ITI_Comb" ---
    image_65 = visual.ImageStim(
        win=win,
        name='image_65', 
        image='resources/assets/BlueBallWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_66 = visual.ImageStim(
        win=win,
        name='image_66', 
        image='resources/assets/YellowTruckWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "ISIcode" ---
    
    # --- Initialize components for Routine "FixationComb_2" ---
    image_67 = visual.ImageStim(
        win=win,
        name='image_67', 
        image='resources/assets/star.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.1), size=(0.05, 0.05),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_68 = visual.ImageStim(
        win=win,
        name='image_68', 
        image='resources/assets/BlueBallWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_69 = visual.ImageStim(
        win=win,
        name='image_69', 
        image='resources/assets/YellowTruckWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "cueComb_2" ---
    image_70 = visual.ImageStim(
        win=win,
        name='image_70', 
        image='resources/assets/BlueBallWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_71 = visual.ImageStim(
        win=win,
        name='image_71', 
        image='resources/assets/YellowTruckWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    text_20 = visual.TextStim(win=win, name='text_20',
        text='',
        font='heiti sc',
        pos=(0, 0.1), height=0.04, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-2.0);
    
    # --- Initialize components for Routine "PracticeComb_2" ---
    image_72 = visual.ImageStim(
        win=win,
        name='image_72', 
        image='default.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.15), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_73 = visual.ImageStim(
        win=win,
        name='image_73', 
        image='resources/assets/BlueBallWhite.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_74 = visual.ImageStim(
        win=win,
        name='image_74', 
        image='resources/assets/YellowTruckWhite.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.21), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    key_resp_13 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "stopShapeLoop" ---
    
    # --- Initialize components for Routine "ThankYou" ---
    text_19 = visual.TextStim(win=win, name='text_19',
        text='任务已经全部完成了，感谢您的参与！',
        font='heiti sc',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
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
    
    # set up handler to look after randomisation of conditions etc
    trials_3 = data.TrialHandler(nReps=0.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_3')
    thisExp.addLoop(trials_3)  # add the loop to the experiment
    thisTrial_3 = trials_3.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
    if thisTrial_3 != None:
        for paramName in thisTrial_3:
            globals()[paramName] = thisTrial_3[paramName]
    
    for thisTrial_3 in trials_3:
        currentLoop = trials_3
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
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
        if thisTrial_3 != None:
            for paramName in thisTrial_3:
                globals()[paramName] = thisTrial_3[paramName]
        
        # --- Prepare to start Routine "dummy" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('dummy.started', globalClock.getTime())
        sound_4.setSound('resources/audio/F-a.mp3', secs=1.0, hamming=True)
        sound_4.setVolume(1.0, log=False)
        sound_4.seek(0)
        sound_5.setSound('resources/audio/F-d.mp3', secs=1.0, hamming=True)
        sound_5.setVolume(1.0, log=False)
        sound_5.seek(0)
        sound_6.setSound('resources/audio/F-b.mp3', secs=1.0, hamming=True)
        sound_6.setVolume(1.0, log=False)
        sound_6.seek(0)
        sound_7.setSound('resources/audio/F-d1.mp3', secs=1.0, hamming=True)
        sound_7.setVolume(1.0, log=False)
        sound_7.seek(0)
        sound_8.setSound('resources/audio/F-e.mp3', secs=1.0, hamming=True)
        sound_8.setVolume(1.0, log=False)
        sound_8.seek(0)
        sound_12.setSound('resources/audio/F-g.mp3', secs=1.0, hamming=True)
        sound_12.setVolume(1.0, log=False)
        sound_12.seek(0)
        # keep track of which components have finished
        dummyComponents = [sound_4, sound_5, sound_6, sound_7, sound_8, sound_12]
        for thisComponent in dummyComponents:
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
        
        # --- Run Routine "dummy" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # if sound_4 is starting this frame...
            if sound_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_4.frameNStart = frameN  # exact frame index
                sound_4.tStart = t  # local t and not account for scr refresh
                sound_4.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_4.started', tThisFlipGlobal)
                # update status
                sound_4.status = STARTED
                sound_4.play(when=win)  # sync with win flip
            
            # if sound_4 is stopping this frame...
            if sound_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_4.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_4.tStop = t  # not accounting for scr refresh
                    sound_4.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_4.stopped')
                    # update status
                    sound_4.status = FINISHED
                    sound_4.stop()
            # update sound_4 status according to whether it's playing
            if sound_4.isPlaying:
                sound_4.status = STARTED
            elif sound_4.isFinished:
                sound_4.status = FINISHED
            
            # if sound_5 is starting this frame...
            if sound_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_5.frameNStart = frameN  # exact frame index
                sound_5.tStart = t  # local t and not account for scr refresh
                sound_5.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_5.started', tThisFlipGlobal)
                # update status
                sound_5.status = STARTED
                sound_5.play(when=win)  # sync with win flip
            
            # if sound_5 is stopping this frame...
            if sound_5.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_5.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_5.tStop = t  # not accounting for scr refresh
                    sound_5.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_5.stopped')
                    # update status
                    sound_5.status = FINISHED
                    sound_5.stop()
            # update sound_5 status according to whether it's playing
            if sound_5.isPlaying:
                sound_5.status = STARTED
            elif sound_5.isFinished:
                sound_5.status = FINISHED
            
            # if sound_6 is starting this frame...
            if sound_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_6.frameNStart = frameN  # exact frame index
                sound_6.tStart = t  # local t and not account for scr refresh
                sound_6.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_6.started', tThisFlipGlobal)
                # update status
                sound_6.status = STARTED
                sound_6.play(when=win)  # sync with win flip
            
            # if sound_6 is stopping this frame...
            if sound_6.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_6.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_6.tStop = t  # not accounting for scr refresh
                    sound_6.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_6.stopped')
                    # update status
                    sound_6.status = FINISHED
                    sound_6.stop()
            # update sound_6 status according to whether it's playing
            if sound_6.isPlaying:
                sound_6.status = STARTED
            elif sound_6.isFinished:
                sound_6.status = FINISHED
            
            # if sound_7 is starting this frame...
            if sound_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_7.frameNStart = frameN  # exact frame index
                sound_7.tStart = t  # local t and not account for scr refresh
                sound_7.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_7.started', tThisFlipGlobal)
                # update status
                sound_7.status = STARTED
                sound_7.play(when=win)  # sync with win flip
            
            # if sound_7 is stopping this frame...
            if sound_7.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_7.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_7.tStop = t  # not accounting for scr refresh
                    sound_7.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_7.stopped')
                    # update status
                    sound_7.status = FINISHED
                    sound_7.stop()
            # update sound_7 status according to whether it's playing
            if sound_7.isPlaying:
                sound_7.status = STARTED
            elif sound_7.isFinished:
                sound_7.status = FINISHED
            
            # if sound_8 is starting this frame...
            if sound_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_8.frameNStart = frameN  # exact frame index
                sound_8.tStart = t  # local t and not account for scr refresh
                sound_8.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_8.started', tThisFlipGlobal)
                # update status
                sound_8.status = STARTED
                sound_8.play(when=win)  # sync with win flip
            
            # if sound_8 is stopping this frame...
            if sound_8.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_8.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_8.tStop = t  # not accounting for scr refresh
                    sound_8.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_8.stopped')
                    # update status
                    sound_8.status = FINISHED
                    sound_8.stop()
            # update sound_8 status according to whether it's playing
            if sound_8.isPlaying:
                sound_8.status = STARTED
            elif sound_8.isFinished:
                sound_8.status = FINISHED
            
            # if sound_12 is starting this frame...
            if sound_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_12.frameNStart = frameN  # exact frame index
                sound_12.tStart = t  # local t and not account for scr refresh
                sound_12.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_12.started', tThisFlipGlobal)
                # update status
                sound_12.status = STARTED
                sound_12.play(when=win)  # sync with win flip
            
            # if sound_12 is stopping this frame...
            if sound_12.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_12.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_12.tStop = t  # not accounting for scr refresh
                    sound_12.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_12.stopped')
                    # update status
                    sound_12.status = FINISHED
                    sound_12.stop()
            # update sound_12 status according to whether it's playing
            if sound_12.isPlaying:
                sound_12.status = STARTED
            elif sound_12.isFinished:
                sound_12.status = FINISHED
            
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
            for thisComponent in dummyComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "dummy" ---
        for thisComponent in dummyComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('dummy.stopped', globalClock.getTime())
        sound_4.pause()  # ensure sound has stopped at end of Routine
        sound_5.pause()  # ensure sound has stopped at end of Routine
        sound_6.pause()  # ensure sound has stopped at end of Routine
        sound_7.pause()  # ensure sound has stopped at end of Routine
        sound_8.pause()  # ensure sound has stopped at end of Routine
        sound_12.pause()  # ensure sound has stopped at end of Routine
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 0.0 repeats of 'trials_3'
    
    
    # --- Prepare to start Routine "instruction_1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instruction_1.started', globalClock.getTime())
    wecomle_resp.keys = []
    wecomle_resp.rt = []
    _wecomle_resp_allKeys = []
    # keep track of which components have finished
    instruction_1Components = [text_homebase, wecomle_resp]
    for thisComponent in instruction_1Components:
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
    
    # --- Run Routine "instruction_1" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_homebase* updates
        
        # if text_homebase is starting this frame...
        if text_homebase.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_homebase.frameNStart = frameN  # exact frame index
            text_homebase.tStart = t  # local t and not account for scr refresh
            text_homebase.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_homebase, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_homebase.status = STARTED
            text_homebase.setAutoDraw(True)
        
        # if text_homebase is active this frame...
        if text_homebase.status == STARTED:
            # update params
            pass
        
        # *wecomle_resp* updates
        waitOnFlip = False
        
        # if wecomle_resp is starting this frame...
        if wecomle_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            wecomle_resp.frameNStart = frameN  # exact frame index
            wecomle_resp.tStart = t  # local t and not account for scr refresh
            wecomle_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(wecomle_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            wecomle_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(wecomle_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(wecomle_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if wecomle_resp.status == STARTED and not waitOnFlip:
            theseKeys = wecomle_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _wecomle_resp_allKeys.extend(theseKeys)
            if len(_wecomle_resp_allKeys):
                wecomle_resp.keys = _wecomle_resp_allKeys[-1].name  # just the last key pressed
                wecomle_resp.rt = _wecomle_resp_allKeys[-1].rt
                wecomle_resp.duration = _wecomle_resp_allKeys[-1].duration
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
        for thisComponent in instruction_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_1" ---
    for thisComponent in instruction_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instruction_1.stopped', globalClock.getTime())
    # the Routine "instruction_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ShapeBoatEx" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ShapeBoatEx.started', globalClock.getTime())
    key_resp_8.keys = []
    key_resp_8.rt = []
    _key_resp_8_allKeys = []
    # keep track of which components have finished
    ShapeBoatExComponents = [textBoat, stimulus, image_2, image_3, image_12, image_13, image_14, key_resp_8, text_11]
    for thisComponent in ShapeBoatExComponents:
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
    
    # --- Run Routine "ShapeBoatEx" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *textBoat* updates
        
        # if textBoat is starting this frame...
        if textBoat.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textBoat.frameNStart = frameN  # exact frame index
            textBoat.tStart = t  # local t and not account for scr refresh
            textBoat.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textBoat, 'tStartRefresh')  # time at next scr refresh
            # update status
            textBoat.status = STARTED
            textBoat.setAutoDraw(True)
        
        # if textBoat is active this frame...
        if textBoat.status == STARTED:
            # update params
            pass
        
        # *stimulus* updates
        
        # if stimulus is starting this frame...
        if stimulus.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stimulus.frameNStart = frameN  # exact frame index
            stimulus.tStart = t  # local t and not account for scr refresh
            stimulus.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimulus, 'tStartRefresh')  # time at next scr refresh
            # update status
            stimulus.status = STARTED
            stimulus.setAutoDraw(True)
        
        # if stimulus is active this frame...
        if stimulus.status == STARTED:
            # update params
            pass
        
        # *image_2* updates
        
        # if image_2 is starting this frame...
        if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_2.frameNStart = frameN  # exact frame index
            image_2.tStart = t  # local t and not account for scr refresh
            image_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            image_2.status = STARTED
            image_2.setAutoDraw(True)
        
        # if image_2 is active this frame...
        if image_2.status == STARTED:
            # update params
            pass
        
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
            if tThisFlipGlobal > image_3.tStartRefresh + 7-frameTolerance:
                # keep track of stop time/frame for later
                image_3.tStop = t  # not accounting for scr refresh
                image_3.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_3.stopped')
                # update status
                image_3.status = FINISHED
                image_3.setAutoDraw(False)
        
        # *image_12* updates
        
        # if image_12 is starting this frame...
        if image_12.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            image_12.frameNStart = frameN  # exact frame index
            image_12.tStart = t  # local t and not account for scr refresh
            image_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_12.started')
            # update status
            image_12.status = STARTED
            image_12.setAutoDraw(True)
        
        # if image_12 is active this frame...
        if image_12.status == STARTED:
            # update params
            pass
        
        # if image_12 is stopping this frame...
        if image_12.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_12.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                image_12.tStop = t  # not accounting for scr refresh
                image_12.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_12.stopped')
                # update status
                image_12.status = FINISHED
                image_12.setAutoDraw(False)
        
        # *image_13* updates
        
        # if image_13 is starting this frame...
        if image_13.status == NOT_STARTED and tThisFlip >= 8-frameTolerance:
            # keep track of start time/frame for later
            image_13.frameNStart = frameN  # exact frame index
            image_13.tStart = t  # local t and not account for scr refresh
            image_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_13.started')
            # update status
            image_13.status = STARTED
            image_13.setAutoDraw(True)
        
        # if image_13 is active this frame...
        if image_13.status == STARTED:
            # update params
            pass
        
        # if image_13 is stopping this frame...
        if image_13.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_13.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_13.tStop = t  # not accounting for scr refresh
                image_13.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_13.stopped')
                # update status
                image_13.status = FINISHED
                image_13.setAutoDraw(False)
        
        # *image_14* updates
        
        # if image_14 is starting this frame...
        if image_14.status == NOT_STARTED and tThisFlip >= 9-frameTolerance:
            # keep track of start time/frame for later
            image_14.frameNStart = frameN  # exact frame index
            image_14.tStart = t  # local t and not account for scr refresh
            image_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_14, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_14.started')
            # update status
            image_14.status = STARTED
            image_14.setAutoDraw(True)
        
        # if image_14 is active this frame...
        if image_14.status == STARTED:
            # update params
            pass
        
        # *key_resp_8* updates
        waitOnFlip = False
        
        # if key_resp_8 is starting this frame...
        if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_8.frameNStart = frameN  # exact frame index
            key_resp_8.tStart = t  # local t and not account for scr refresh
            key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_8.started')
            # update status
            key_resp_8.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_8.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_8.getKeys(keyList=['m'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_8_allKeys.extend(theseKeys)
            if len(_key_resp_8_allKeys):
                key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
                key_resp_8.rt = _key_resp_8_allKeys[-1].rt
                key_resp_8.duration = _key_resp_8_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *text_11* updates
        
        # if text_11 is starting this frame...
        if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_11.frameNStart = frameN  # exact frame index
            text_11.tStart = t  # local t and not account for scr refresh
            text_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_11.started')
            # update status
            text_11.status = STARTED
            text_11.setAutoDraw(True)
        
        # if text_11 is active this frame...
        if text_11.status == STARTED:
            # update params
            pass
        
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
        for thisComponent in ShapeBoatExComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ShapeBoatEx" ---
    for thisComponent in ShapeBoatExComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ShapeBoatEx.stopped', globalClock.getTime())
    # check responses
    if key_resp_8.keys in ['', [], None]:  # No response was made
        key_resp_8.keys = None
    thisExp.addData('key_resp_8.keys',key_resp_8.keys)
    if key_resp_8.keys != None:  # we had a response
        thisExp.addData('key_resp_8.rt', key_resp_8.rt)
        thisExp.addData('key_resp_8.duration', key_resp_8.duration)
    thisExp.nextEntry()
    # the Routine "ShapeBoatEx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ShapeRabbitEx" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ShapeRabbitEx.started', globalClock.getTime())
    key_resp_7.keys = []
    key_resp_7.rt = []
    _key_resp_7_allKeys = []
    # keep track of which components have finished
    ShapeRabbitExComponents = [text, image, image_10, image_4, image_15, image_16, image_17, key_resp_7, text_10]
    for thisComponent in ShapeRabbitExComponents:
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
    
    # --- Run Routine "ShapeRabbitEx" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
        
        # *image_10* updates
        
        # if image_10 is starting this frame...
        if image_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_10.frameNStart = frameN  # exact frame index
            image_10.tStart = t  # local t and not account for scr refresh
            image_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_10.started')
            # update status
            image_10.status = STARTED
            image_10.setAutoDraw(True)
        
        # if image_10 is active this frame...
        if image_10.status == STARTED:
            # update params
            pass
        
        # *image_4* updates
        
        # if image_4 is starting this frame...
        if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
            if tThisFlipGlobal > image_4.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                image_4.tStop = t  # not accounting for scr refresh
                image_4.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_4.stopped')
                # update status
                image_4.status = FINISHED
                image_4.setAutoDraw(False)
        
        # *image_15* updates
        
        # if image_15 is starting this frame...
        if image_15.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            image_15.frameNStart = frameN  # exact frame index
            image_15.tStart = t  # local t and not account for scr refresh
            image_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_15, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_15.started')
            # update status
            image_15.status = STARTED
            image_15.setAutoDraw(True)
        
        # if image_15 is active this frame...
        if image_15.status == STARTED:
            # update params
            pass
        
        # if image_15 is stopping this frame...
        if image_15.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_15.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_15.tStop = t  # not accounting for scr refresh
                image_15.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_15.stopped')
                # update status
                image_15.status = FINISHED
                image_15.setAutoDraw(False)
        
        # *image_16* updates
        
        # if image_16 is starting this frame...
        if image_16.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
            # keep track of start time/frame for later
            image_16.frameNStart = frameN  # exact frame index
            image_16.tStart = t  # local t and not account for scr refresh
            image_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_16, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_16.started')
            # update status
            image_16.status = STARTED
            image_16.setAutoDraw(True)
        
        # if image_16 is active this frame...
        if image_16.status == STARTED:
            # update params
            pass
        
        # if image_16 is stopping this frame...
        if image_16.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_16.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_16.tStop = t  # not accounting for scr refresh
                image_16.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_16.stopped')
                # update status
                image_16.status = FINISHED
                image_16.setAutoDraw(False)
        
        # *image_17* updates
        
        # if image_17 is starting this frame...
        if image_17.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            image_17.frameNStart = frameN  # exact frame index
            image_17.tStart = t  # local t and not account for scr refresh
            image_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_17, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_17.started')
            # update status
            image_17.status = STARTED
            image_17.setAutoDraw(True)
        
        # if image_17 is active this frame...
        if image_17.status == STARTED:
            # update params
            pass
        
        # *key_resp_7* updates
        waitOnFlip = False
        
        # if key_resp_7 is starting this frame...
        if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_7.frameNStart = frameN  # exact frame index
            key_resp_7.tStart = t  # local t and not account for scr refresh
            key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_7.started')
            # update status
            key_resp_7.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_7.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_7.getKeys(keyList=['z'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_7_allKeys.extend(theseKeys)
            if len(_key_resp_7_allKeys):
                key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
                key_resp_7.rt = _key_resp_7_allKeys[-1].rt
                key_resp_7.duration = _key_resp_7_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *text_10* updates
        
        # if text_10 is starting this frame...
        if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_10.frameNStart = frameN  # exact frame index
            text_10.tStart = t  # local t and not account for scr refresh
            text_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_10.started')
            # update status
            text_10.status = STARTED
            text_10.setAutoDraw(True)
        
        # if text_10 is active this frame...
        if text_10.status == STARTED:
            # update params
            pass
        
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
        for thisComponent in ShapeRabbitExComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ShapeRabbitEx" ---
    for thisComponent in ShapeRabbitExComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ShapeRabbitEx.stopped', globalClock.getTime())
    # check responses
    if key_resp_7.keys in ['', [], None]:  # No response was made
        key_resp_7.keys = None
    thisExp.addData('key_resp_7.keys',key_resp_7.keys)
    if key_resp_7.keys != None:  # we had a response
        thisExp.addData('key_resp_7.rt', key_resp_7.rt)
        thisExp.addData('key_resp_7.duration', key_resp_7.duration)
    thisExp.nextEntry()
    # the Routine "ShapeRabbitEx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    block = data.TrialHandler(nReps=3.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
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
        
        # --- Prepare to start Routine "Instructions" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('Instructions.started', globalClock.getTime())
        key_resp_2.keys = []
        key_resp_2.rt = []
        _key_resp_2_allKeys = []
        sound_2.setSound('resources/audio/F11.mp3', secs=20, hamming=True)
        sound_2.setVolume(1.0, log=False)
        sound_2.seek(0)
        # keep track of which components have finished
        InstructionsComponents = [image_5, key_resp_2, sound_2]
        for thisComponent in InstructionsComponents:
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
        
        # --- Run Routine "Instructions" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_5* updates
            
            # if image_5 is starting this frame...
            if image_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_5.frameNStart = frameN  # exact frame index
                image_5.tStart = t  # local t and not account for scr refresh
                image_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_5.started')
                # update status
                image_5.status = STARTED
                image_5.setAutoDraw(True)
            
            # if image_5 is active this frame...
            if image_5.status == STARTED:
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
                if tThisFlipGlobal > sound_2.tStartRefresh + 20-frameTolerance:
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
            for thisComponent in InstructionsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Instructions" ---
        for thisComponent in InstructionsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('Instructions.stopped', globalClock.getTime())
        # check responses
        if key_resp_2.keys in ['', [], None]:  # No response was made
            key_resp_2.keys = None
        block.addData('key_resp_2.keys',key_resp_2.keys)
        if key_resp_2.keys != None:  # we had a response
            block.addData('key_resp_2.rt', key_resp_2.rt)
            block.addData('key_resp_2.duration', key_resp_2.duration)
        sound_2.pause()  # ensure sound has stopped at end of Routine
        # the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        trials = data.TrialHandler(nReps=1.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('resources/ShapePractTrial.csv'),
            seed=None, name='trials')
        thisExp.addLoop(trials)  # add the loop to the experiment
        thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        for thisTrial in trials:
            currentLoop = trials
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
            # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
            if thisTrial != None:
                for paramName in thisTrial:
                    globals()[paramName] = thisTrial[paramName]
            
            # --- Prepare to start Routine "InterTrial_Intreval" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('InterTrial_Intreval.started', globalClock.getTime())
            # keep track of which components have finished
            InterTrial_IntrevalComponents = [image_6, image_7]
            for thisComponent in InterTrial_IntrevalComponents:
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
            
            # --- Run Routine "InterTrial_Intreval" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.8:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_6* updates
                
                # if image_6 is starting this frame...
                if image_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_6.frameNStart = frameN  # exact frame index
                    image_6.tStart = t  # local t and not account for scr refresh
                    image_6.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_6, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_6.started')
                    # update status
                    image_6.status = STARTED
                    image_6.setAutoDraw(True)
                
                # if image_6 is active this frame...
                if image_6.status == STARTED:
                    # update params
                    pass
                
                # if image_6 is stopping this frame...
                if image_6.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_6.tStartRefresh + .8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_6.tStop = t  # not accounting for scr refresh
                        image_6.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_6.stopped')
                        # update status
                        image_6.status = FINISHED
                        image_6.setAutoDraw(False)
                
                # *image_7* updates
                
                # if image_7 is starting this frame...
                if image_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_7.frameNStart = frameN  # exact frame index
                    image_7.tStart = t  # local t and not account for scr refresh
                    image_7.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_7, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_7.started')
                    # update status
                    image_7.status = STARTED
                    image_7.setAutoDraw(True)
                
                # if image_7 is active this frame...
                if image_7.status == STARTED:
                    # update params
                    pass
                
                # if image_7 is stopping this frame...
                if image_7.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_7.tStartRefresh + .8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_7.tStop = t  # not accounting for scr refresh
                        image_7.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_7.stopped')
                        # update status
                        image_7.status = FINISHED
                        image_7.setAutoDraw(False)
                
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
                for thisComponent in InterTrial_IntrevalComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "InterTrial_Intreval" ---
            for thisComponent in InterTrial_IntrevalComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('InterTrial_Intreval.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.800000)
            
            # --- Prepare to start Routine "ISIcode" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('ISIcode.started', globalClock.getTime())
            # keep track of which components have finished
            ISIcodeComponents = []
            for thisComponent in ISIcodeComponents:
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
            
            # --- Run Routine "ISIcode" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
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
                for thisComponent in ISIcodeComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ISIcode" ---
            for thisComponent in ISIcodeComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('ISIcode.stopped', globalClock.getTime())
            # Run 'End Routine' code from pickISI
            # pick the ISI for the next routine
            # this code component is set to 'both' because we need to remove the 'np'
            # at the start of np.linspace (this is a python library JS won't know what to call. 
            
            # make range from a to b in n stepsizes
            ISIRange = np.linspace(1000, 1500, 500)
            
            # picking from a shuffled array is easier for random selection in JS
            shuffle(ISIRange)
            thisISI = ISIRange[0]/1000 # the first item of the shuffled array 
            
            # show in console for debugging
            print('thisISI: ', thisISI)
            
            # save this ISI to our output file
            trials.addData('ISI', thisISI)
            # the Routine "ISIcode" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "Fixation" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Fixation.started', globalClock.getTime())
            # keep track of which components have finished
            FixationComponents = [image_8, image_9, image_37]
            for thisComponent in FixationComponents:
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
            
            # --- Run Routine "Fixation" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_8* updates
                
                # if image_8 is starting this frame...
                if image_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_8.frameNStart = frameN  # exact frame index
                    image_8.tStart = t  # local t and not account for scr refresh
                    image_8.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_8, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_8.started')
                    # update status
                    image_8.status = STARTED
                    image_8.setAutoDraw(True)
                
                # if image_8 is active this frame...
                if image_8.status == STARTED:
                    # update params
                    pass
                
                # if image_8 is stopping this frame...
                if image_8.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_8.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_8.tStop = t  # not accounting for scr refresh
                        image_8.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_8.stopped')
                        # update status
                        image_8.status = FINISHED
                        image_8.setAutoDraw(False)
                
                # *image_9* updates
                
                # if image_9 is starting this frame...
                if image_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_9.frameNStart = frameN  # exact frame index
                    image_9.tStart = t  # local t and not account for scr refresh
                    image_9.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_9, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_9.started')
                    # update status
                    image_9.status = STARTED
                    image_9.setAutoDraw(True)
                
                # if image_9 is active this frame...
                if image_9.status == STARTED:
                    # update params
                    pass
                
                # if image_9 is stopping this frame...
                if image_9.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_9.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_9.tStop = t  # not accounting for scr refresh
                        image_9.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_9.stopped')
                        # update status
                        image_9.status = FINISHED
                        image_9.setAutoDraw(False)
                
                # *image_37* updates
                
                # if image_37 is starting this frame...
                if image_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_37.frameNStart = frameN  # exact frame index
                    image_37.tStart = t  # local t and not account for scr refresh
                    image_37.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_37, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_37.started')
                    # update status
                    image_37.status = STARTED
                    image_37.setAutoDraw(True)
                
                # if image_37 is active this frame...
                if image_37.status == STARTED:
                    # update params
                    pass
                
                # if image_37 is stopping this frame...
                if image_37.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_37.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_37.tStop = t  # not accounting for scr refresh
                        image_37.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_37.stopped')
                        # update status
                        image_37.status = FINISHED
                        image_37.setAutoDraw(False)
                
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
                for thisComponent in FixationComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Fixation" ---
            for thisComponent in FixationComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Fixation.stopped', globalClock.getTime())
            # the Routine "Fixation" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "CueShape" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('CueShape.started', globalClock.getTime())
            # keep track of which components have finished
            CueShapeComponents = [text_14, image_38, image_39]
            for thisComponent in CueShapeComponents:
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
            
            # --- Run Routine "CueShape" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_14* updates
                
                # if text_14 is starting this frame...
                if text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_14.frameNStart = frameN  # exact frame index
                    text_14.tStart = t  # local t and not account for scr refresh
                    text_14.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_14.started')
                    # update status
                    text_14.status = STARTED
                    text_14.setAutoDraw(True)
                
                # if text_14 is active this frame...
                if text_14.status == STARTED:
                    # update params
                    pass
                
                # if text_14 is stopping this frame...
                if text_14.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_14.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text_14.tStop = t  # not accounting for scr refresh
                        text_14.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_14.stopped')
                        # update status
                        text_14.status = FINISHED
                        text_14.setAutoDraw(False)
                
                # *image_38* updates
                
                # if image_38 is starting this frame...
                if image_38.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_38.frameNStart = frameN  # exact frame index
                    image_38.tStart = t  # local t and not account for scr refresh
                    image_38.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_38, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_38.started')
                    # update status
                    image_38.status = STARTED
                    image_38.setAutoDraw(True)
                
                # if image_38 is active this frame...
                if image_38.status == STARTED:
                    # update params
                    pass
                
                # if image_38 is stopping this frame...
                if image_38.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_38.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        image_38.tStop = t  # not accounting for scr refresh
                        image_38.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_38.stopped')
                        # update status
                        image_38.status = FINISHED
                        image_38.setAutoDraw(False)
                
                # *image_39* updates
                
                # if image_39 is starting this frame...
                if image_39.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_39.frameNStart = frameN  # exact frame index
                    image_39.tStart = t  # local t and not account for scr refresh
                    image_39.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_39, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_39.started')
                    # update status
                    image_39.status = STARTED
                    image_39.setAutoDraw(True)
                
                # if image_39 is active this frame...
                if image_39.status == STARTED:
                    # update params
                    pass
                
                # if image_39 is stopping this frame...
                if image_39.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_39.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        image_39.tStop = t  # not accounting for scr refresh
                        image_39.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_39.stopped')
                        # update status
                        image_39.status = FINISHED
                        image_39.setAutoDraw(False)
                
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
                for thisComponent in CueShapeComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "CueShape" ---
            for thisComponent in CueShapeComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('CueShape.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            
            # --- Prepare to start Routine "Stim" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Stim.started', globalClock.getTime())
            image_40.setOpacity(1)
            image_40.setPos((0, 0.15))
            image_40.setSize((0.3, 0.3))
            image_40.setOri(0)
            image_40.setImage(middle)
            image_41.setOpacity(1)
            image_41.setPos((-0.4, -0.21))
            image_41.setSize((0.3, 0.3))
            image_41.setOri(0)
            image_41.setImage(leftImg)
            image_42.setOpacity(1)
            image_42.setPos((0.4, -0.21))
            image_42.setSize((0.3, 0.3))
            image_42.setOri(0)
            image_42.setImage(rightImg)
            key_resp_3.keys = []
            key_resp_3.rt = []
            _key_resp_3_allKeys = []
            # keep track of which components have finished
            StimComponents = [image_40, image_41, image_42, key_resp_3]
            for thisComponent in StimComponents:
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
            
            # --- Run Routine "Stim" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 10.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_40* updates
                
                # if image_40 is starting this frame...
                if image_40.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_40.frameNStart = frameN  # exact frame index
                    image_40.tStart = t  # local t and not account for scr refresh
                    image_40.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_40, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_40.started')
                    # update status
                    image_40.status = STARTED
                    image_40.setAutoDraw(True)
                
                # if image_40 is active this frame...
                if image_40.status == STARTED:
                    # update params
                    pass
                
                # if image_40 is stopping this frame...
                if image_40.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_40.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_40.tStop = t  # not accounting for scr refresh
                        image_40.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_40.stopped')
                        # update status
                        image_40.status = FINISHED
                        image_40.setAutoDraw(False)
                
                # *image_41* updates
                
                # if image_41 is starting this frame...
                if image_41.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_41.frameNStart = frameN  # exact frame index
                    image_41.tStart = t  # local t and not account for scr refresh
                    image_41.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_41, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_41.started')
                    # update status
                    image_41.status = STARTED
                    image_41.setAutoDraw(True)
                
                # if image_41 is active this frame...
                if image_41.status == STARTED:
                    # update params
                    pass
                
                # if image_41 is stopping this frame...
                if image_41.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_41.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_41.tStop = t  # not accounting for scr refresh
                        image_41.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_41.stopped')
                        # update status
                        image_41.status = FINISHED
                        image_41.setAutoDraw(False)
                
                # *image_42* updates
                
                # if image_42 is starting this frame...
                if image_42.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_42.frameNStart = frameN  # exact frame index
                    image_42.tStart = t  # local t and not account for scr refresh
                    image_42.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_42, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_42.started')
                    # update status
                    image_42.status = STARTED
                    image_42.setAutoDraw(True)
                
                # if image_42 is active this frame...
                if image_42.status == STARTED:
                    # update params
                    pass
                
                # if image_42 is stopping this frame...
                if image_42.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_42.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_42.tStop = t  # not accounting for scr refresh
                        image_42.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_42.stopped')
                        # update status
                        image_42.status = FINISHED
                        image_42.setAutoDraw(False)
                
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
                
                # if key_resp_3 is stopping this frame...
                if key_resp_3.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_3.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_3.tStop = t  # not accounting for scr refresh
                        key_resp_3.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp_3.stopped')
                        # update status
                        key_resp_3.status = FINISHED
                        key_resp_3.status = FINISHED
                if key_resp_3.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_3.getKeys(keyList=['z','m'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_3_allKeys.extend(theseKeys)
                    if len(_key_resp_3_allKeys):
                        key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                        key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                        key_resp_3.duration = _key_resp_3_allKeys[-1].duration
                        # was this correct?
                        if (key_resp_3.keys == str(corrAns)) or (key_resp_3.keys == corrAns):
                            key_resp_3.corr = 1
                        else:
                            key_resp_3.corr = 0
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
                for thisComponent in StimComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Stim" ---
            for thisComponent in StimComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Stim.stopped', globalClock.getTime())
            # check responses
            if key_resp_3.keys in ['', [], None]:  # No response was made
                key_resp_3.keys = None
                # was no response the correct answer?!
                if str(corrAns).lower() == 'none':
                   key_resp_3.corr = 1;  # correct non-response
                else:
                   key_resp_3.corr = 0;  # failed to respond (incorrectly)
            # store data for trials (TrialHandler)
            trials.addData('key_resp_3.keys',key_resp_3.keys)
            trials.addData('key_resp_3.corr', key_resp_3.corr)
            if key_resp_3.keys != None:  # we had a response
                trials.addData('key_resp_3.rt', key_resp_3.rt)
                trials.addData('key_resp_3.duration', key_resp_3.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-10.000000)
            
            # --- Prepare to start Routine "Feedback" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Feedback.started', globalClock.getTime())
            # Run 'Begin Routine' code from code_2
            if key_resp_3.keys: # if a keypress has been made
                if key_resp_3.keys[0] =='z':
                    if key_resp_3.corr:
                        left = 'resources/assets/RedRabbitGreen.png'
                        right = 'resources/assets/BlueBoatWhite.png'
                        audio = 'resources/audio/F-b.mp3'
                    else:
                        left = 'resources/assets/RedRabbitRed.png'
                        right = 'resources/assets/BlueBoatWhite.png'
                        audio = 'resources/audio/F-a.mp3'
                elif key_resp_3.keys[0] =='m':
                    if key_resp_3.corr:
                        right = 'resources/assets/BlueBoatGreen.png'
                        left = 'resources/assets/RedRabbitWhite.png'
                        audio = 'resources/audio/F-b.mp3'
                    else:
                        left = 'resources/assets/RedRabbitWhite.png'
                        right = 'resources/assets/BlueBoatRed.png'
                        audio = 'resources/audio/F-a.mp3'
            else: # thi is classed as an incorrect response
                if corrAns == 'm':
                    right = 'resources/assets/BlueBoatRed.png'
                    left = 'resources/assets/RedRabbitWhite.png'
                    audio = 'resources/audio/F-a.mp3'
                else:
                    left = 'resources/assets/RedRabbitRed.png'
                    right = 'resources/assets/BlueBoatWhite.png'
                    audio = 'resources/audio/F-a.mp3'
            
            image_43.setOpacity(1)
            image_43.setPos((0, 0.15))
            image_43.setSize((0.3, 0.3))
            image_43.setOri(0)
            image_43.setImage(middle)
            image_44.setOpacity(1)
            image_44.setPos((-0.4, -0.21))
            image_44.setSize((0.3, 0.3))
            image_44.setOri(0)
            image_44.setImage(left)
            image_45.setOpacity(1)
            image_45.setPos((0.4, -0.21))
            image_45.setSize((0.3, 0.3))
            image_45.setOri(0)
            image_45.setImage(right)
            sound_9.setSound(audio, secs=4, hamming=True)
            sound_9.setVolume(1, log=False)
            sound_9.seek(0)
            # keep track of which components have finished
            FeedbackComponents = [image_43, image_44, image_45, sound_9]
            for thisComponent in FeedbackComponents:
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
            
            # --- Run Routine "Feedback" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 4.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_43* updates
                
                # if image_43 is starting this frame...
                if image_43.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_43.frameNStart = frameN  # exact frame index
                    image_43.tStart = t  # local t and not account for scr refresh
                    image_43.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_43, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_43.started')
                    # update status
                    image_43.status = STARTED
                    image_43.setAutoDraw(True)
                
                # if image_43 is active this frame...
                if image_43.status == STARTED:
                    # update params
                    pass
                
                # if image_43 is stopping this frame...
                if image_43.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_43.tStartRefresh + 4-frameTolerance:
                        # keep track of stop time/frame for later
                        image_43.tStop = t  # not accounting for scr refresh
                        image_43.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_43.stopped')
                        # update status
                        image_43.status = FINISHED
                        image_43.setAutoDraw(False)
                
                # *image_44* updates
                
                # if image_44 is starting this frame...
                if image_44.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_44.frameNStart = frameN  # exact frame index
                    image_44.tStart = t  # local t and not account for scr refresh
                    image_44.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_44, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_44.started')
                    # update status
                    image_44.status = STARTED
                    image_44.setAutoDraw(True)
                
                # if image_44 is active this frame...
                if image_44.status == STARTED:
                    # update params
                    pass
                
                # if image_44 is stopping this frame...
                if image_44.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_44.tStartRefresh + 4-frameTolerance:
                        # keep track of stop time/frame for later
                        image_44.tStop = t  # not accounting for scr refresh
                        image_44.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_44.stopped')
                        # update status
                        image_44.status = FINISHED
                        image_44.setAutoDraw(False)
                
                # *image_45* updates
                
                # if image_45 is starting this frame...
                if image_45.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_45.frameNStart = frameN  # exact frame index
                    image_45.tStart = t  # local t and not account for scr refresh
                    image_45.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_45, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_45.started')
                    # update status
                    image_45.status = STARTED
                    image_45.setAutoDraw(True)
                
                # if image_45 is active this frame...
                if image_45.status == STARTED:
                    # update params
                    pass
                
                # if image_45 is stopping this frame...
                if image_45.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_45.tStartRefresh + 4-frameTolerance:
                        # keep track of stop time/frame for later
                        image_45.tStop = t  # not accounting for scr refresh
                        image_45.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_45.stopped')
                        # update status
                        image_45.status = FINISHED
                        image_45.setAutoDraw(False)
                
                # if sound_9 is starting this frame...
                if sound_9.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    sound_9.frameNStart = frameN  # exact frame index
                    sound_9.tStart = t  # local t and not account for scr refresh
                    sound_9.tStartRefresh = tThisFlipGlobal  # on global time
                    # add timestamp to datafile
                    thisExp.addData('sound_9.started', tThisFlipGlobal)
                    # update status
                    sound_9.status = STARTED
                    sound_9.play(when=win)  # sync with win flip
                
                # if sound_9 is stopping this frame...
                if sound_9.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > sound_9.tStartRefresh + 4-frameTolerance:
                        # keep track of stop time/frame for later
                        sound_9.tStop = t  # not accounting for scr refresh
                        sound_9.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'sound_9.stopped')
                        # update status
                        sound_9.status = FINISHED
                        sound_9.stop()
                # update sound_9 status according to whether it's playing
                if sound_9.isPlaying:
                    sound_9.status = STARTED
                elif sound_9.isFinished:
                    sound_9.status = FINISHED
                
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
                for thisComponent in FeedbackComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Feedback" ---
            for thisComponent in FeedbackComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Feedback.stopped', globalClock.getTime())
            sound_9.pause()  # ensure sound has stopped at end of Routine
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-4.000000)
            
            # --- Prepare to start Routine "UpdateAccuracy" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('UpdateAccuracy.started', globalClock.getTime())
            # Run 'Begin Routine' code from code
            if key_resp_3.keys:
                if key_resp_3.corr:
                    counterOne +=1
                else:
                    counterTwo +=1
            else:
                key_resp_3.corr = 0
                counterTwo +=1
            # keep track of which components have finished
            UpdateAccuracyComponents = []
            for thisComponent in UpdateAccuracyComponents:
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
            
            # --- Run Routine "UpdateAccuracy" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
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
                for thisComponent in UpdateAccuracyComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "UpdateAccuracy" ---
            for thisComponent in UpdateAccuracyComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('UpdateAccuracy.stopped', globalClock.getTime())
            # the Routine "UpdateAccuracy" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'trials'
        
        
        # --- Prepare to start Routine "continueStatus" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('continueStatus.started', globalClock.getTime())
        # Run 'Begin Routine' code from code_11
        if counterOne >= 3:
            outPut = '做得好'+'\n'+'\n'+'让我们开始下一部分的练习'+'\n'+'\n'+'按空格键继续。'
            audio = 'resources/audio/F-d1.mp3'
            block.finished = True
        if counterTwo>1:
            outPut = '很遗憾，这次练习失败了，让我们再试一次。'+'\n'+'\n'+'\n'+'按空格键继续。'
            audio = 'resources/audio/F-e.mp3'
            isForward += 1
            block.finished = False
            counterOne = 0
            counterTwo = 0
            if isForward == 3:
                outPut = '很遗憾，您没能通过练习环节。'+'\n'+'\n'+'任务结束，感谢您的参与。'
                audio = 'resources/audio/F-g.mp3'
                block.finished = True
        key_resp_18.keys = []
        key_resp_18.rt = []
        _key_resp_18_allKeys = []
        sound_10.setSound(audio, secs=20, hamming=True)
        sound_10.setVolume(1.0, log=False)
        sound_10.seek(0)
        # keep track of which components have finished
        continueStatusComponents = [text_24, key_resp_18, sound_10]
        for thisComponent in continueStatusComponents:
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
        
        # --- Run Routine "continueStatus" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_24* updates
            
            # if text_24 is starting this frame...
            if text_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_24.frameNStart = frameN  # exact frame index
                text_24.tStart = t  # local t and not account for scr refresh
                text_24.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_24, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_24.status = STARTED
                text_24.setAutoDraw(True)
            
            # if text_24 is active this frame...
            if text_24.status == STARTED:
                # update params
                text_24.setText(outPut, log=False)
            
            # *key_resp_18* updates
            waitOnFlip = False
            
            # if key_resp_18 is starting this frame...
            if key_resp_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_18.frameNStart = frameN  # exact frame index
                key_resp_18.tStart = t  # local t and not account for scr refresh
                key_resp_18.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_18, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_18.started')
                # update status
                key_resp_18.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_18.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_18.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_18.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_18.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_18_allKeys.extend(theseKeys)
                if len(_key_resp_18_allKeys):
                    key_resp_18.keys = _key_resp_18_allKeys[-1].name  # just the last key pressed
                    key_resp_18.rt = _key_resp_18_allKeys[-1].rt
                    key_resp_18.duration = _key_resp_18_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # if sound_10 is starting this frame...
            if sound_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_10.frameNStart = frameN  # exact frame index
                sound_10.tStart = t  # local t and not account for scr refresh
                sound_10.tStartRefresh = tThisFlipGlobal  # on global time
                # update status
                sound_10.status = STARTED
                sound_10.play(when=win)  # sync with win flip
            
            # if sound_10 is stopping this frame...
            if sound_10.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_10.tStartRefresh + 20-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_10.tStop = t  # not accounting for scr refresh
                    sound_10.frameNStop = frameN  # exact frame index
                    # update status
                    sound_10.status = FINISHED
                    sound_10.stop()
            # update sound_10 status according to whether it's playing
            if sound_10.isPlaying:
                sound_10.status = STARTED
            elif sound_10.isFinished:
                sound_10.status = FINISHED
            
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
            for thisComponent in continueStatusComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "continueStatus" ---
        for thisComponent in continueStatusComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('continueStatus.stopped', globalClock.getTime())
        # Run 'End Routine' code from code_12
        if isForward == 3:
            core.quit()
        # check responses
        if key_resp_18.keys in ['', [], None]:  # No response was made
            key_resp_18.keys = None
        block.addData('key_resp_18.keys',key_resp_18.keys)
        if key_resp_18.keys != None:  # we had a response
            block.addData('key_resp_18.rt', key_resp_18.rt)
            block.addData('key_resp_18.duration', key_resp_18.duration)
        sound_10.pause()  # ensure sound has stopped at end of Routine
        # the Routine "continueStatus" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 3.0 repeats of 'block'
    
    
    # --- Prepare to start Routine "ColorRedEx" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ColorRedEx.started', globalClock.getTime())
    key_resp_9.keys = []
    key_resp_9.rt = []
    _key_resp_9_allKeys = []
    # keep track of which components have finished
    ColorRedExComponents = [text_7, image_18, image_20, image_19, image_21, image_22, image_23, key_resp_9, text_12]
    for thisComponent in ColorRedExComponents:
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
    
    # --- Run Routine "ColorRedEx" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_7* updates
        
        # if text_7 is starting this frame...
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_7.started')
            # update status
            text_7.status = STARTED
            text_7.setAutoDraw(True)
        
        # if text_7 is active this frame...
        if text_7.status == STARTED:
            # update params
            pass
        
        # *image_18* updates
        
        # if image_18 is starting this frame...
        if image_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_18.frameNStart = frameN  # exact frame index
            image_18.tStart = t  # local t and not account for scr refresh
            image_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_18, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_18.started')
            # update status
            image_18.status = STARTED
            image_18.setAutoDraw(True)
        
        # if image_18 is active this frame...
        if image_18.status == STARTED:
            # update params
            pass
        
        # *image_20* updates
        
        # if image_20 is starting this frame...
        if image_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_20.frameNStart = frameN  # exact frame index
            image_20.tStart = t  # local t and not account for scr refresh
            image_20.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_20, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_20.started')
            # update status
            image_20.status = STARTED
            image_20.setAutoDraw(True)
        
        # if image_20 is active this frame...
        if image_20.status == STARTED:
            # update params
            pass
        
        # *image_19* updates
        
        # if image_19 is starting this frame...
        if image_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_19.frameNStart = frameN  # exact frame index
            image_19.tStart = t  # local t and not account for scr refresh
            image_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_19, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_19.started')
            # update status
            image_19.status = STARTED
            image_19.setAutoDraw(True)
        
        # if image_19 is active this frame...
        if image_19.status == STARTED:
            # update params
            pass
        
        # if image_19 is stopping this frame...
        if image_19.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_19.tStartRefresh + 7-frameTolerance:
                # keep track of stop time/frame for later
                image_19.tStop = t  # not accounting for scr refresh
                image_19.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_19.stopped')
                # update status
                image_19.status = FINISHED
                image_19.setAutoDraw(False)
        
        # *image_21* updates
        
        # if image_21 is starting this frame...
        if image_21.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            image_21.frameNStart = frameN  # exact frame index
            image_21.tStart = t  # local t and not account for scr refresh
            image_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_21, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_21.started')
            # update status
            image_21.status = STARTED
            image_21.setAutoDraw(True)
        
        # if image_21 is active this frame...
        if image_21.status == STARTED:
            # update params
            pass
        
        # if image_21 is stopping this frame...
        if image_21.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_21.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_21.tStop = t  # not accounting for scr refresh
                image_21.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_21.stopped')
                # update status
                image_21.status = FINISHED
                image_21.setAutoDraw(False)
        
        # *image_22* updates
        
        # if image_22 is starting this frame...
        if image_22.status == NOT_STARTED and tThisFlip >= 8-frameTolerance:
            # keep track of start time/frame for later
            image_22.frameNStart = frameN  # exact frame index
            image_22.tStart = t  # local t and not account for scr refresh
            image_22.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_22, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_22.started')
            # update status
            image_22.status = STARTED
            image_22.setAutoDraw(True)
        
        # if image_22 is active this frame...
        if image_22.status == STARTED:
            # update params
            pass
        
        # if image_22 is stopping this frame...
        if image_22.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_22.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_22.tStop = t  # not accounting for scr refresh
                image_22.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_22.stopped')
                # update status
                image_22.status = FINISHED
                image_22.setAutoDraw(False)
        
        # *image_23* updates
        
        # if image_23 is starting this frame...
        if image_23.status == NOT_STARTED and tThisFlip >= 9-frameTolerance:
            # keep track of start time/frame for later
            image_23.frameNStart = frameN  # exact frame index
            image_23.tStart = t  # local t and not account for scr refresh
            image_23.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_23, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_23.started')
            # update status
            image_23.status = STARTED
            image_23.setAutoDraw(True)
        
        # if image_23 is active this frame...
        if image_23.status == STARTED:
            # update params
            pass
        
        # *key_resp_9* updates
        waitOnFlip = False
        
        # if key_resp_9 is starting this frame...
        if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_9.frameNStart = frameN  # exact frame index
            key_resp_9.tStart = t  # local t and not account for scr refresh
            key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_9.started')
            # update status
            key_resp_9.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_9.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_9.getKeys(keyList=['z'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_9_allKeys.extend(theseKeys)
            if len(_key_resp_9_allKeys):
                key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
                key_resp_9.rt = _key_resp_9_allKeys[-1].rt
                key_resp_9.duration = _key_resp_9_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *text_12* updates
        
        # if text_12 is starting this frame...
        if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_12.frameNStart = frameN  # exact frame index
            text_12.tStart = t  # local t and not account for scr refresh
            text_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_12.started')
            # update status
            text_12.status = STARTED
            text_12.setAutoDraw(True)
        
        # if text_12 is active this frame...
        if text_12.status == STARTED:
            # update params
            pass
        
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
        for thisComponent in ColorRedExComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ColorRedEx" ---
    for thisComponent in ColorRedExComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ColorRedEx.stopped', globalClock.getTime())
    # check responses
    if key_resp_9.keys in ['', [], None]:  # No response was made
        key_resp_9.keys = None
    thisExp.addData('key_resp_9.keys',key_resp_9.keys)
    if key_resp_9.keys != None:  # we had a response
        thisExp.addData('key_resp_9.rt', key_resp_9.rt)
        thisExp.addData('key_resp_9.duration', key_resp_9.duration)
    thisExp.nextEntry()
    # the Routine "ColorRedEx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ColorBlueEx" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ColorBlueEx.started', globalClock.getTime())
    key_resp_10.keys = []
    key_resp_10.rt = []
    _key_resp_10_allKeys = []
    # keep track of which components have finished
    ColorBlueExComponents = [text_8, image_24, image_25, image_26, image_27, image_28, image_29, key_resp_10, text_13]
    for thisComponent in ColorBlueExComponents:
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
    
    # --- Run Routine "ColorBlueEx" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_8* updates
        
        # if text_8 is starting this frame...
        if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_8.frameNStart = frameN  # exact frame index
            text_8.tStart = t  # local t and not account for scr refresh
            text_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_8.started')
            # update status
            text_8.status = STARTED
            text_8.setAutoDraw(True)
        
        # if text_8 is active this frame...
        if text_8.status == STARTED:
            # update params
            pass
        
        # *image_24* updates
        
        # if image_24 is starting this frame...
        if image_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_24.frameNStart = frameN  # exact frame index
            image_24.tStart = t  # local t and not account for scr refresh
            image_24.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_24, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_24.started')
            # update status
            image_24.status = STARTED
            image_24.setAutoDraw(True)
        
        # if image_24 is active this frame...
        if image_24.status == STARTED:
            # update params
            pass
        
        # *image_25* updates
        
        # if image_25 is starting this frame...
        if image_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_25.frameNStart = frameN  # exact frame index
            image_25.tStart = t  # local t and not account for scr refresh
            image_25.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_25, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_25.started')
            # update status
            image_25.status = STARTED
            image_25.setAutoDraw(True)
        
        # if image_25 is active this frame...
        if image_25.status == STARTED:
            # update params
            pass
        
        # *image_26* updates
        
        # if image_26 is starting this frame...
        if image_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_26.frameNStart = frameN  # exact frame index
            image_26.tStart = t  # local t and not account for scr refresh
            image_26.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_26, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_26.started')
            # update status
            image_26.status = STARTED
            image_26.setAutoDraw(True)
        
        # if image_26 is active this frame...
        if image_26.status == STARTED:
            # update params
            pass
        
        # if image_26 is stopping this frame...
        if image_26.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_26.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                image_26.tStop = t  # not accounting for scr refresh
                image_26.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_26.stopped')
                # update status
                image_26.status = FINISHED
                image_26.setAutoDraw(False)
        
        # *image_27* updates
        
        # if image_27 is starting this frame...
        if image_27.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            image_27.frameNStart = frameN  # exact frame index
            image_27.tStart = t  # local t and not account for scr refresh
            image_27.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_27, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_27.started')
            # update status
            image_27.status = STARTED
            image_27.setAutoDraw(True)
        
        # if image_27 is active this frame...
        if image_27.status == STARTED:
            # update params
            pass
        
        # if image_27 is stopping this frame...
        if image_27.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_27.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_27.tStop = t  # not accounting for scr refresh
                image_27.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_27.stopped')
                # update status
                image_27.status = FINISHED
                image_27.setAutoDraw(False)
        
        # *image_28* updates
        
        # if image_28 is starting this frame...
        if image_28.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
            # keep track of start time/frame for later
            image_28.frameNStart = frameN  # exact frame index
            image_28.tStart = t  # local t and not account for scr refresh
            image_28.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_28, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_28.started')
            # update status
            image_28.status = STARTED
            image_28.setAutoDraw(True)
        
        # if image_28 is active this frame...
        if image_28.status == STARTED:
            # update params
            pass
        
        # if image_28 is stopping this frame...
        if image_28.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_28.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_28.tStop = t  # not accounting for scr refresh
                image_28.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_28.stopped')
                # update status
                image_28.status = FINISHED
                image_28.setAutoDraw(False)
        
        # *image_29* updates
        
        # if image_29 is starting this frame...
        if image_29.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            image_29.frameNStart = frameN  # exact frame index
            image_29.tStart = t  # local t and not account for scr refresh
            image_29.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_29, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_29.started')
            # update status
            image_29.status = STARTED
            image_29.setAutoDraw(True)
        
        # if image_29 is active this frame...
        if image_29.status == STARTED:
            # update params
            pass
        
        # *key_resp_10* updates
        waitOnFlip = False
        
        # if key_resp_10 is starting this frame...
        if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_10.frameNStart = frameN  # exact frame index
            key_resp_10.tStart = t  # local t and not account for scr refresh
            key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_10.started')
            # update status
            key_resp_10.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_10.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_10.getKeys(keyList=['m'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_10_allKeys.extend(theseKeys)
            if len(_key_resp_10_allKeys):
                key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
                key_resp_10.rt = _key_resp_10_allKeys[-1].rt
                key_resp_10.duration = _key_resp_10_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *text_13* updates
        
        # if text_13 is starting this frame...
        if text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_13.frameNStart = frameN  # exact frame index
            text_13.tStart = t  # local t and not account for scr refresh
            text_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_13.started')
            # update status
            text_13.status = STARTED
            text_13.setAutoDraw(True)
        
        # if text_13 is active this frame...
        if text_13.status == STARTED:
            # update params
            pass
        
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
        for thisComponent in ColorBlueExComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ColorBlueEx" ---
    for thisComponent in ColorBlueExComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ColorBlueEx.stopped', globalClock.getTime())
    # check responses
    if key_resp_10.keys in ['', [], None]:  # No response was made
        key_resp_10.keys = None
    thisExp.addData('key_resp_10.keys',key_resp_10.keys)
    if key_resp_10.keys != None:  # we had a response
        thisExp.addData('key_resp_10.rt', key_resp_10.rt)
        thisExp.addData('key_resp_10.duration', key_resp_10.duration)
    thisExp.nextEntry()
    # the Routine "ColorBlueEx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    block2 = data.TrialHandler(nReps=3.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='block2')
    thisExp.addLoop(block2)  # add the loop to the experiment
    thisBlock2 = block2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisBlock2.rgb)
    if thisBlock2 != None:
        for paramName in thisBlock2:
            globals()[paramName] = thisBlock2[paramName]
    
    for thisBlock2 in block2:
        currentLoop = block2
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
        # abbreviate parameter names if possible (e.g. rgb = thisBlock2.rgb)
        if thisBlock2 != None:
            for paramName in thisBlock2:
                globals()[paramName] = thisBlock2[paramName]
        
        # --- Prepare to start Routine "Instructions" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('Instructions.started', globalClock.getTime())
        key_resp_2.keys = []
        key_resp_2.rt = []
        _key_resp_2_allKeys = []
        sound_2.setSound('resources/audio/F11.mp3', secs=20, hamming=True)
        sound_2.setVolume(1.0, log=False)
        sound_2.seek(0)
        # keep track of which components have finished
        InstructionsComponents = [image_5, key_resp_2, sound_2]
        for thisComponent in InstructionsComponents:
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
        
        # --- Run Routine "Instructions" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_5* updates
            
            # if image_5 is starting this frame...
            if image_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_5.frameNStart = frameN  # exact frame index
                image_5.tStart = t  # local t and not account for scr refresh
                image_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_5.started')
                # update status
                image_5.status = STARTED
                image_5.setAutoDraw(True)
            
            # if image_5 is active this frame...
            if image_5.status == STARTED:
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
                if tThisFlipGlobal > sound_2.tStartRefresh + 20-frameTolerance:
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
            for thisComponent in InstructionsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Instructions" ---
        for thisComponent in InstructionsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('Instructions.stopped', globalClock.getTime())
        # check responses
        if key_resp_2.keys in ['', [], None]:  # No response was made
            key_resp_2.keys = None
        block2.addData('key_resp_2.keys',key_resp_2.keys)
        if key_resp_2.keys != None:  # we had a response
            block2.addData('key_resp_2.rt', key_resp_2.rt)
            block2.addData('key_resp_2.duration', key_resp_2.duration)
        sound_2.pause()  # ensure sound has stopped at end of Routine
        # the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        trials_2 = data.TrialHandler(nReps=1.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('resources/colorPract.csv'),
            seed=None, name='trials_2')
        thisExp.addLoop(trials_2)  # add the loop to the experiment
        thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
        if thisTrial_2 != None:
            for paramName in thisTrial_2:
                globals()[paramName] = thisTrial_2[paramName]
        
        for thisTrial_2 in trials_2:
            currentLoop = trials_2
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
            # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
            if thisTrial_2 != None:
                for paramName in thisTrial_2:
                    globals()[paramName] = thisTrial_2[paramName]
            
            # --- Prepare to start Routine "InterTrial_Intreval" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('InterTrial_Intreval.started', globalClock.getTime())
            # keep track of which components have finished
            InterTrial_IntrevalComponents = [image_6, image_7]
            for thisComponent in InterTrial_IntrevalComponents:
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
            
            # --- Run Routine "InterTrial_Intreval" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.8:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_6* updates
                
                # if image_6 is starting this frame...
                if image_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_6.frameNStart = frameN  # exact frame index
                    image_6.tStart = t  # local t and not account for scr refresh
                    image_6.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_6, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_6.started')
                    # update status
                    image_6.status = STARTED
                    image_6.setAutoDraw(True)
                
                # if image_6 is active this frame...
                if image_6.status == STARTED:
                    # update params
                    pass
                
                # if image_6 is stopping this frame...
                if image_6.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_6.tStartRefresh + .8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_6.tStop = t  # not accounting for scr refresh
                        image_6.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_6.stopped')
                        # update status
                        image_6.status = FINISHED
                        image_6.setAutoDraw(False)
                
                # *image_7* updates
                
                # if image_7 is starting this frame...
                if image_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_7.frameNStart = frameN  # exact frame index
                    image_7.tStart = t  # local t and not account for scr refresh
                    image_7.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_7, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_7.started')
                    # update status
                    image_7.status = STARTED
                    image_7.setAutoDraw(True)
                
                # if image_7 is active this frame...
                if image_7.status == STARTED:
                    # update params
                    pass
                
                # if image_7 is stopping this frame...
                if image_7.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_7.tStartRefresh + .8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_7.tStop = t  # not accounting for scr refresh
                        image_7.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_7.stopped')
                        # update status
                        image_7.status = FINISHED
                        image_7.setAutoDraw(False)
                
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
                for thisComponent in InterTrial_IntrevalComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "InterTrial_Intreval" ---
            for thisComponent in InterTrial_IntrevalComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('InterTrial_Intreval.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.800000)
            
            # --- Prepare to start Routine "ISIcode" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('ISIcode.started', globalClock.getTime())
            # keep track of which components have finished
            ISIcodeComponents = []
            for thisComponent in ISIcodeComponents:
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
            
            # --- Run Routine "ISIcode" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
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
                for thisComponent in ISIcodeComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ISIcode" ---
            for thisComponent in ISIcodeComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('ISIcode.stopped', globalClock.getTime())
            # Run 'End Routine' code from pickISI
            # pick the ISI for the next routine
            # this code component is set to 'both' because we need to remove the 'np'
            # at the start of np.linspace (this is a python library JS won't know what to call. 
            
            # make range from a to b in n stepsizes
            ISIRange = np.linspace(1000, 1500, 500)
            
            # picking from a shuffled array is easier for random selection in JS
            shuffle(ISIRange)
            thisISI = ISIRange[0]/1000 # the first item of the shuffled array 
            
            # show in console for debugging
            print('thisISI: ', thisISI)
            
            # save this ISI to our output file
            trials.addData('ISI', thisISI)
            # the Routine "ISIcode" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "Fixation" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Fixation.started', globalClock.getTime())
            # keep track of which components have finished
            FixationComponents = [image_8, image_9, image_37]
            for thisComponent in FixationComponents:
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
            
            # --- Run Routine "Fixation" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_8* updates
                
                # if image_8 is starting this frame...
                if image_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_8.frameNStart = frameN  # exact frame index
                    image_8.tStart = t  # local t and not account for scr refresh
                    image_8.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_8, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_8.started')
                    # update status
                    image_8.status = STARTED
                    image_8.setAutoDraw(True)
                
                # if image_8 is active this frame...
                if image_8.status == STARTED:
                    # update params
                    pass
                
                # if image_8 is stopping this frame...
                if image_8.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_8.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_8.tStop = t  # not accounting for scr refresh
                        image_8.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_8.stopped')
                        # update status
                        image_8.status = FINISHED
                        image_8.setAutoDraw(False)
                
                # *image_9* updates
                
                # if image_9 is starting this frame...
                if image_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_9.frameNStart = frameN  # exact frame index
                    image_9.tStart = t  # local t and not account for scr refresh
                    image_9.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_9, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_9.started')
                    # update status
                    image_9.status = STARTED
                    image_9.setAutoDraw(True)
                
                # if image_9 is active this frame...
                if image_9.status == STARTED:
                    # update params
                    pass
                
                # if image_9 is stopping this frame...
                if image_9.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_9.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_9.tStop = t  # not accounting for scr refresh
                        image_9.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_9.stopped')
                        # update status
                        image_9.status = FINISHED
                        image_9.setAutoDraw(False)
                
                # *image_37* updates
                
                # if image_37 is starting this frame...
                if image_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_37.frameNStart = frameN  # exact frame index
                    image_37.tStart = t  # local t and not account for scr refresh
                    image_37.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_37, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_37.started')
                    # update status
                    image_37.status = STARTED
                    image_37.setAutoDraw(True)
                
                # if image_37 is active this frame...
                if image_37.status == STARTED:
                    # update params
                    pass
                
                # if image_37 is stopping this frame...
                if image_37.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_37.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_37.tStop = t  # not accounting for scr refresh
                        image_37.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_37.stopped')
                        # update status
                        image_37.status = FINISHED
                        image_37.setAutoDraw(False)
                
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
                for thisComponent in FixationComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Fixation" ---
            for thisComponent in FixationComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Fixation.stopped', globalClock.getTime())
            # the Routine "Fixation" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "CueColor" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('CueColor.started', globalClock.getTime())
            # keep track of which components have finished
            CueColorComponents = [text_16, image_46, image_47]
            for thisComponent in CueColorComponents:
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
            
            # --- Run Routine "CueColor" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_16* updates
                
                # if text_16 is starting this frame...
                if text_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_16.frameNStart = frameN  # exact frame index
                    text_16.tStart = t  # local t and not account for scr refresh
                    text_16.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_16.started')
                    # update status
                    text_16.status = STARTED
                    text_16.setAutoDraw(True)
                
                # if text_16 is active this frame...
                if text_16.status == STARTED:
                    # update params
                    pass
                
                # if text_16 is stopping this frame...
                if text_16.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_16.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text_16.tStop = t  # not accounting for scr refresh
                        text_16.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_16.stopped')
                        # update status
                        text_16.status = FINISHED
                        text_16.setAutoDraw(False)
                
                # *image_46* updates
                
                # if image_46 is starting this frame...
                if image_46.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_46.frameNStart = frameN  # exact frame index
                    image_46.tStart = t  # local t and not account for scr refresh
                    image_46.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_46, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_46.started')
                    # update status
                    image_46.status = STARTED
                    image_46.setAutoDraw(True)
                
                # if image_46 is active this frame...
                if image_46.status == STARTED:
                    # update params
                    pass
                
                # if image_46 is stopping this frame...
                if image_46.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_46.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        image_46.tStop = t  # not accounting for scr refresh
                        image_46.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_46.stopped')
                        # update status
                        image_46.status = FINISHED
                        image_46.setAutoDraw(False)
                
                # *image_47* updates
                
                # if image_47 is starting this frame...
                if image_47.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_47.frameNStart = frameN  # exact frame index
                    image_47.tStart = t  # local t and not account for scr refresh
                    image_47.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_47, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_47.started')
                    # update status
                    image_47.status = STARTED
                    image_47.setAutoDraw(True)
                
                # if image_47 is active this frame...
                if image_47.status == STARTED:
                    # update params
                    pass
                
                # if image_47 is stopping this frame...
                if image_47.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_47.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        image_47.tStop = t  # not accounting for scr refresh
                        image_47.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_47.stopped')
                        # update status
                        image_47.status = FINISHED
                        image_47.setAutoDraw(False)
                
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
                for thisComponent in CueColorComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "CueColor" ---
            for thisComponent in CueColorComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('CueColor.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            
            # --- Prepare to start Routine "Stim2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Stim2.started', globalClock.getTime())
            image_58.setOpacity(1)
            image_58.setPos((0, 0.15))
            image_58.setSize((0.3, 0.3))
            image_58.setOri(0)
            image_58.setImage(middle)
            image_59.setOpacity(1)
            image_59.setPos((-0.4, -0.21))
            image_59.setSize((0.3, 0.3))
            image_59.setOri(0)
            image_59.setImage(leftimg)
            image_60.setOpacity(1)
            image_60.setPos((0.4, -0.21))
            image_60.setSize((0.3, 0.3))
            image_60.setOri(0)
            image_60.setImage(rightimg)
            key_resp_12.keys = []
            key_resp_12.rt = []
            _key_resp_12_allKeys = []
            # keep track of which components have finished
            Stim2Components = [image_58, image_59, image_60, key_resp_12]
            for thisComponent in Stim2Components:
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
            
            # --- Run Routine "Stim2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 10.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_58* updates
                
                # if image_58 is starting this frame...
                if image_58.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_58.frameNStart = frameN  # exact frame index
                    image_58.tStart = t  # local t and not account for scr refresh
                    image_58.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_58, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_58.started')
                    # update status
                    image_58.status = STARTED
                    image_58.setAutoDraw(True)
                
                # if image_58 is active this frame...
                if image_58.status == STARTED:
                    # update params
                    pass
                
                # if image_58 is stopping this frame...
                if image_58.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_58.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_58.tStop = t  # not accounting for scr refresh
                        image_58.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_58.stopped')
                        # update status
                        image_58.status = FINISHED
                        image_58.setAutoDraw(False)
                
                # *image_59* updates
                
                # if image_59 is starting this frame...
                if image_59.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_59.frameNStart = frameN  # exact frame index
                    image_59.tStart = t  # local t and not account for scr refresh
                    image_59.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_59, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_59.started')
                    # update status
                    image_59.status = STARTED
                    image_59.setAutoDraw(True)
                
                # if image_59 is active this frame...
                if image_59.status == STARTED:
                    # update params
                    pass
                
                # if image_59 is stopping this frame...
                if image_59.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_59.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_59.tStop = t  # not accounting for scr refresh
                        image_59.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_59.stopped')
                        # update status
                        image_59.status = FINISHED
                        image_59.setAutoDraw(False)
                
                # *image_60* updates
                
                # if image_60 is starting this frame...
                if image_60.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_60.frameNStart = frameN  # exact frame index
                    image_60.tStart = t  # local t and not account for scr refresh
                    image_60.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_60, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_60.started')
                    # update status
                    image_60.status = STARTED
                    image_60.setAutoDraw(True)
                
                # if image_60 is active this frame...
                if image_60.status == STARTED:
                    # update params
                    pass
                
                # if image_60 is stopping this frame...
                if image_60.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_60.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_60.tStop = t  # not accounting for scr refresh
                        image_60.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_60.stopped')
                        # update status
                        image_60.status = FINISHED
                        image_60.setAutoDraw(False)
                
                # *key_resp_12* updates
                waitOnFlip = False
                
                # if key_resp_12 is starting this frame...
                if key_resp_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_12.frameNStart = frameN  # exact frame index
                    key_resp_12.tStart = t  # local t and not account for scr refresh
                    key_resp_12.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_12, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_12.started')
                    # update status
                    key_resp_12.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_12.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_12.clearEvents, eventType='keyboard')  # clear events on next screen flip
                
                # if key_resp_12 is stopping this frame...
                if key_resp_12.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_12.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_12.tStop = t  # not accounting for scr refresh
                        key_resp_12.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp_12.stopped')
                        # update status
                        key_resp_12.status = FINISHED
                        key_resp_12.status = FINISHED
                if key_resp_12.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_12.getKeys(keyList=['z','m'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_12_allKeys.extend(theseKeys)
                    if len(_key_resp_12_allKeys):
                        key_resp_12.keys = _key_resp_12_allKeys[-1].name  # just the last key pressed
                        key_resp_12.rt = _key_resp_12_allKeys[-1].rt
                        key_resp_12.duration = _key_resp_12_allKeys[-1].duration
                        # was this correct?
                        if (key_resp_12.keys == str(corrAns)) or (key_resp_12.keys == corrAns):
                            key_resp_12.corr = 1
                        else:
                            key_resp_12.corr = 0
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
                for thisComponent in Stim2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Stim2" ---
            for thisComponent in Stim2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Stim2.stopped', globalClock.getTime())
            # check responses
            if key_resp_12.keys in ['', [], None]:  # No response was made
                key_resp_12.keys = None
                # was no response the correct answer?!
                if str(corrAns).lower() == 'none':
                   key_resp_12.corr = 1;  # correct non-response
                else:
                   key_resp_12.corr = 0;  # failed to respond (incorrectly)
            # store data for trials_2 (TrialHandler)
            trials_2.addData('key_resp_12.keys',key_resp_12.keys)
            trials_2.addData('key_resp_12.corr', key_resp_12.corr)
            if key_resp_12.keys != None:  # we had a response
                trials_2.addData('key_resp_12.rt', key_resp_12.rt)
                trials_2.addData('key_resp_12.duration', key_resp_12.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-10.000000)
            
            # --- Prepare to start Routine "Feedback2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Feedback2.started', globalClock.getTime())
            # Run 'Begin Routine' code from code_6
            if key_resp_12.keys:
                if key_resp_12.keys[0] =='z':
                    if key_resp_12.corr:
                        left = 'resources/assets/RedRabbitGreen.png'
                        right = 'resources/assets/BlueBoatWhite.png'
                        audio1 = 'resources/audio/F-b.mp3'
                    else:
                        left = 'resources/assets/RedRabbitRed.png'
                        right = 'resources/assets/BlueBoatWhite.png'
                        audio1 = 'resources/audio/F-a.mp3'
            
                elif key_resp_12.keys[0] =='m':
                    if key_resp_12.corr:
                        right = 'resources/assets/BlueBoatGreen.png'
                        left = 'resources/assets/RedRabbitWhite.png'
                        audio1 = 'resources/audio/F-b.mp3'
                    else:
                        left = 'resources/assets/RedRabbitRed.png'
                        right = 'resources/assets/BlueBoatWhite.png'
                        audio1 = 'resources/audio/F-a.mp3'
            else:
                if corrAns == 'm':
                        right = 'resources/assets/BlueBoatRed.png'
                        left = 'resources/assets/RedRabbitWhite.png'
                        audio1 = 'resources/audio/F-a.mp3'
                else:
                        left = 'resources/assets/RedRabbitRed.png'
                        right = 'resources/assets/BlueBoatWhite.png'
                        audio1 = 'resources/audio/F-a.mp3'
            
            image_61.setOpacity(1)
            image_61.setPos((0, 0.15))
            image_61.setSize((0.3, 0.3))
            image_61.setOri(0)
            image_61.setImage(middle)
            image_62.setOpacity(1)
            image_62.setPos((-0.4, -0.21))
            image_62.setSize((0.3, 0.3))
            image_62.setOri(0)
            image_62.setImage(left)
            image_63.setOpacity(1)
            image_63.setPos((0.4, -0.21))
            image_63.setSize((0.3, 0.3))
            image_63.setOri(0)
            image_63.setImage(right)
            sound_1.setSound(audio1, secs=4, hamming=True)
            sound_1.setVolume(1.0, log=False)
            sound_1.seek(0)
            # keep track of which components have finished
            Feedback2Components = [image_61, image_62, image_63, sound_1]
            for thisComponent in Feedback2Components:
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
            
            # --- Run Routine "Feedback2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 4.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_61* updates
                
                # if image_61 is starting this frame...
                if image_61.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_61.frameNStart = frameN  # exact frame index
                    image_61.tStart = t  # local t and not account for scr refresh
                    image_61.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_61, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_61.started')
                    # update status
                    image_61.status = STARTED
                    image_61.setAutoDraw(True)
                
                # if image_61 is active this frame...
                if image_61.status == STARTED:
                    # update params
                    pass
                
                # if image_61 is stopping this frame...
                if image_61.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_61.tStartRefresh + 4-frameTolerance:
                        # keep track of stop time/frame for later
                        image_61.tStop = t  # not accounting for scr refresh
                        image_61.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_61.stopped')
                        # update status
                        image_61.status = FINISHED
                        image_61.setAutoDraw(False)
                
                # *image_62* updates
                
                # if image_62 is starting this frame...
                if image_62.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_62.frameNStart = frameN  # exact frame index
                    image_62.tStart = t  # local t and not account for scr refresh
                    image_62.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_62, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_62.started')
                    # update status
                    image_62.status = STARTED
                    image_62.setAutoDraw(True)
                
                # if image_62 is active this frame...
                if image_62.status == STARTED:
                    # update params
                    pass
                
                # if image_62 is stopping this frame...
                if image_62.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_62.tStartRefresh + 4-frameTolerance:
                        # keep track of stop time/frame for later
                        image_62.tStop = t  # not accounting for scr refresh
                        image_62.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_62.stopped')
                        # update status
                        image_62.status = FINISHED
                        image_62.setAutoDraw(False)
                
                # *image_63* updates
                
                # if image_63 is starting this frame...
                if image_63.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_63.frameNStart = frameN  # exact frame index
                    image_63.tStart = t  # local t and not account for scr refresh
                    image_63.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_63, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_63.started')
                    # update status
                    image_63.status = STARTED
                    image_63.setAutoDraw(True)
                
                # if image_63 is active this frame...
                if image_63.status == STARTED:
                    # update params
                    pass
                
                # if image_63 is stopping this frame...
                if image_63.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_63.tStartRefresh + 4-frameTolerance:
                        # keep track of stop time/frame for later
                        image_63.tStop = t  # not accounting for scr refresh
                        image_63.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_63.stopped')
                        # update status
                        image_63.status = FINISHED
                        image_63.setAutoDraw(False)
                
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
                    if tThisFlipGlobal > sound_1.tStartRefresh + 4-frameTolerance:
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
                for thisComponent in Feedback2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Feedback2" ---
            for thisComponent in Feedback2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Feedback2.stopped', globalClock.getTime())
            sound_1.pause()  # ensure sound has stopped at end of Routine
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-4.000000)
            
            # --- Prepare to start Routine "UpdateAccuracy2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('UpdateAccuracy2.started', globalClock.getTime())
            # Run 'Begin Routine' code from code_7
            if key_resp_12.keys:
                if key_resp_12.corr:
                    counterOne +=1
                else:
                    counterTwo +=1
            else:
                key_resp_12.corr = 0
                counterTwo +=1
            # keep track of which components have finished
            UpdateAccuracy2Components = []
            for thisComponent in UpdateAccuracy2Components:
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
            
            # --- Run Routine "UpdateAccuracy2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
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
                for thisComponent in UpdateAccuracy2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "UpdateAccuracy2" ---
            for thisComponent in UpdateAccuracy2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('UpdateAccuracy2.stopped', globalClock.getTime())
            # the Routine "UpdateAccuracy2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'trials_2'
        
        
        # --- Prepare to start Routine "ContStatus2" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('ContStatus2.started', globalClock.getTime())
        # Run 'Begin Routine' code from code_4
        if counterOne >= 3:
            outPut = '做得好，练习结束了。'+'\n'+'\n'+'让我们开始正式实验吧!'+'\n'+'\n'+'按空格键继续。'
            audio = 'resources/audio/F-d.mp3'
            block2.finished = True
        if counterTwo>1:
            outPut = '很遗憾，这次练习失败了，让我们再试一次。'+'\n'+'\n'+'\n'+'按空格键继续。'
            audio = 'resources/audio/F-e.mp3'
            isForward +=1
            block2.finished = False
            counterOne = 0
            counterTwo = 0
            if isForward == 3:
                outPut = '很遗憾，您没能通过练习环节。'+'\n'+'\n'+'任务结束，感谢您的参与。'
                audio = 'resources/audio/F-g.mp3'
                block.finished = True
        key_resp_16.keys = []
        key_resp_16.rt = []
        _key_resp_16_allKeys = []
        sound_11.setSound(audio, secs=20, hamming=True)
        sound_11.setVolume(1.0, log=False)
        sound_11.seek(0)
        # keep track of which components have finished
        ContStatus2Components = [text_17, key_resp_16, sound_11]
        for thisComponent in ContStatus2Components:
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
        
        # --- Run Routine "ContStatus2" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_17* updates
            
            # if text_17 is starting this frame...
            if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_17.frameNStart = frameN  # exact frame index
                text_17.tStart = t  # local t and not account for scr refresh
                text_17.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_17.started')
                # update status
                text_17.status = STARTED
                text_17.setAutoDraw(True)
            
            # if text_17 is active this frame...
            if text_17.status == STARTED:
                # update params
                text_17.setText(outPut, log=False)
            
            # *key_resp_16* updates
            waitOnFlip = False
            
            # if key_resp_16 is starting this frame...
            if key_resp_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_16.frameNStart = frameN  # exact frame index
                key_resp_16.tStart = t  # local t and not account for scr refresh
                key_resp_16.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_16, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_16.started')
                # update status
                key_resp_16.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_16.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_16.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_16.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_16.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_16_allKeys.extend(theseKeys)
                if len(_key_resp_16_allKeys):
                    key_resp_16.keys = _key_resp_16_allKeys[-1].name  # just the last key pressed
                    key_resp_16.rt = _key_resp_16_allKeys[-1].rt
                    key_resp_16.duration = _key_resp_16_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # if sound_11 is starting this frame...
            if sound_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_11.frameNStart = frameN  # exact frame index
                sound_11.tStart = t  # local t and not account for scr refresh
                sound_11.tStartRefresh = tThisFlipGlobal  # on global time
                # update status
                sound_11.status = STARTED
                sound_11.play(when=win)  # sync with win flip
            
            # if sound_11 is stopping this frame...
            if sound_11.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_11.tStartRefresh + 20-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_11.tStop = t  # not accounting for scr refresh
                    sound_11.frameNStop = frameN  # exact frame index
                    # update status
                    sound_11.status = FINISHED
                    sound_11.stop()
            # update sound_11 status according to whether it's playing
            if sound_11.isPlaying:
                sound_11.status = STARTED
            elif sound_11.isFinished:
                sound_11.status = FINISHED
            
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
            for thisComponent in ContStatus2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "ContStatus2" ---
        for thisComponent in ContStatus2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('ContStatus2.stopped', globalClock.getTime())
        # Run 'End Routine' code from code_8
        if isForward == 3:
            core.quit()
        # check responses
        if key_resp_16.keys in ['', [], None]:  # No response was made
            key_resp_16.keys = None
        block2.addData('key_resp_16.keys',key_resp_16.keys)
        if key_resp_16.keys != None:  # we had a response
            block2.addData('key_resp_16.rt', key_resp_16.rt)
            block2.addData('key_resp_16.duration', key_resp_16.duration)
        sound_11.pause()  # ensure sound has stopped at end of Routine
        # the Routine "ContStatus2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 3.0 repeats of 'block2'
    
    
    # --- Prepare to start Routine "CombInstructions" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('CombInstructions.started', globalClock.getTime())
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    CombInstructionsComponents = [MainTaskPrompt, key_resp_4]
    for thisComponent in CombInstructionsComponents:
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
    
    # --- Run Routine "CombInstructions" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *MainTaskPrompt* updates
        
        # if MainTaskPrompt is starting this frame...
        if MainTaskPrompt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            MainTaskPrompt.frameNStart = frameN  # exact frame index
            MainTaskPrompt.tStart = t  # local t and not account for scr refresh
            MainTaskPrompt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(MainTaskPrompt, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'MainTaskPrompt.started')
            # update status
            MainTaskPrompt.status = STARTED
            MainTaskPrompt.setAutoDraw(True)
        
        # if MainTaskPrompt is active this frame...
        if MainTaskPrompt.status == STARTED:
            # update params
            pass
        
        # *key_resp_4* updates
        waitOnFlip = False
        
        # if key_resp_4 is starting this frame...
        if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_4.frameNStart = frameN  # exact frame index
            key_resp_4.tStart = t  # local t and not account for scr refresh
            key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_4.started')
            # update status
            key_resp_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_4.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_4_allKeys.extend(theseKeys)
            if len(_key_resp_4_allKeys):
                key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                key_resp_4.duration = _key_resp_4_allKeys[-1].duration
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
        for thisComponent in CombInstructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "CombInstructions" ---
    for thisComponent in CombInstructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('CombInstructions.stopped', globalClock.getTime())
    # check responses
    if key_resp_4.keys in ['', [], None]:  # No response was made
        key_resp_4.keys = None
    thisExp.addData('key_resp_4.keys',key_resp_4.keys)
    if key_resp_4.keys != None:  # we had a response
        thisExp.addData('key_resp_4.rt', key_resp_4.rt)
        thisExp.addData('key_resp_4.duration', key_resp_4.duration)
    thisExp.nextEntry()
    # the Routine "CombInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Instructions2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Instructions2.started', globalClock.getTime())
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    sound_3.setSound('resources/audio/F12.mp3', secs=20, hamming=True)
    sound_3.setVolume(1.0, log=False)
    sound_3.seek(0)
    # keep track of which components have finished
    Instructions2Components = [image_11, key_resp, sound_3]
    for thisComponent in Instructions2Components:
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
    
    # --- Run Routine "Instructions2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_11* updates
        
        # if image_11 is starting this frame...
        if image_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_11.frameNStart = frameN  # exact frame index
            image_11.tStart = t  # local t and not account for scr refresh
            image_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_11.started')
            # update status
            image_11.status = STARTED
            image_11.setAutoDraw(True)
        
        # if image_11 is active this frame...
        if image_11.status == STARTED:
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
        
        # if sound_3 is starting this frame...
        if sound_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_3.frameNStart = frameN  # exact frame index
            sound_3.tStart = t  # local t and not account for scr refresh
            sound_3.tStartRefresh = tThisFlipGlobal  # on global time
            # update status
            sound_3.status = STARTED
            sound_3.play(when=win)  # sync with win flip
        
        # if sound_3 is stopping this frame...
        if sound_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_3.tStartRefresh + 20-frameTolerance:
                # keep track of stop time/frame for later
                sound_3.tStop = t  # not accounting for scr refresh
                sound_3.frameNStop = frameN  # exact frame index
                # update status
                sound_3.status = FINISHED
                sound_3.stop()
        # update sound_3 status according to whether it's playing
        if sound_3.isPlaying:
            sound_3.status = STARTED
        elif sound_3.isFinished:
            sound_3.status = FINISHED
        
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
        for thisComponent in Instructions2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Instructions2" ---
    for thisComponent in Instructions2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Instructions2.stopped', globalClock.getTime())
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    thisExp.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        thisExp.addData('key_resp.rt', key_resp.rt)
        thisExp.addData('key_resp.duration', key_resp.duration)
    thisExp.nextEntry()
    sound_3.pause()  # ensure sound has stopped at end of Routine
    # the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    LoopSelectFreqNumber = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('resources/selectFreqNum.csv'),
        seed=None, name='LoopSelectFreqNumber')
    thisExp.addLoop(LoopSelectFreqNumber)  # add the loop to the experiment
    thisLoopSelectFreqNumber = LoopSelectFreqNumber.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisLoopSelectFreqNumber.rgb)
    if thisLoopSelectFreqNumber != None:
        for paramName in thisLoopSelectFreqNumber:
            globals()[paramName] = thisLoopSelectFreqNumber[paramName]
    
    for thisLoopSelectFreqNumber in LoopSelectFreqNumber:
        currentLoop = LoopSelectFreqNumber
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
        # abbreviate parameter names if possible (e.g. rgb = thisLoopSelectFreqNumber.rgb)
        if thisLoopSelectFreqNumber != None:
            for paramName in thisLoopSelectFreqNumber:
                globals()[paramName] = thisLoopSelectFreqNumber[paramName]
        
        # --- Prepare to start Routine "countReset" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('countReset.started', globalClock.getTime())
        # Run 'Begin Routine' code from resetLoopCounters
        colorLoopCounter = 0
        shapeLoopCounter = 0
        # keep track of which components have finished
        countResetComponents = []
        for thisComponent in countResetComponents:
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
        
        # --- Run Routine "countReset" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
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
            for thisComponent in countResetComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "countReset" ---
        for thisComponent in countResetComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('countReset.stopped', globalClock.getTime())
        # the Routine "countReset" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        colorLoop = data.TrialHandler(nReps=1.0, method='fullRandom', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('resources/color.csv'),
            seed=None, name='colorLoop')
        thisExp.addLoop(colorLoop)  # add the loop to the experiment
        thisColorLoop = colorLoop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisColorLoop.rgb)
        if thisColorLoop != None:
            for paramName in thisColorLoop:
                globals()[paramName] = thisColorLoop[paramName]
        
        for thisColorLoop in colorLoop:
            currentLoop = colorLoop
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
            # abbreviate parameter names if possible (e.g. rgb = thisColorLoop.rgb)
            if thisColorLoop != None:
                for paramName in thisColorLoop:
                    globals()[paramName] = thisColorLoop[paramName]
            
            # --- Prepare to start Routine "ITI_Comb" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('ITI_Comb.started', globalClock.getTime())
            # keep track of which components have finished
            ITI_CombComponents = [image_65, image_66]
            for thisComponent in ITI_CombComponents:
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
            
            # --- Run Routine "ITI_Comb" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.8:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_65* updates
                
                # if image_65 is starting this frame...
                if image_65.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_65.frameNStart = frameN  # exact frame index
                    image_65.tStart = t  # local t and not account for scr refresh
                    image_65.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_65, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_65.started')
                    # update status
                    image_65.status = STARTED
                    image_65.setAutoDraw(True)
                
                # if image_65 is active this frame...
                if image_65.status == STARTED:
                    # update params
                    pass
                
                # if image_65 is stopping this frame...
                if image_65.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_65.tStartRefresh + .8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_65.tStop = t  # not accounting for scr refresh
                        image_65.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_65.stopped')
                        # update status
                        image_65.status = FINISHED
                        image_65.setAutoDraw(False)
                
                # *image_66* updates
                
                # if image_66 is starting this frame...
                if image_66.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_66.frameNStart = frameN  # exact frame index
                    image_66.tStart = t  # local t and not account for scr refresh
                    image_66.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_66, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_66.started')
                    # update status
                    image_66.status = STARTED
                    image_66.setAutoDraw(True)
                
                # if image_66 is active this frame...
                if image_66.status == STARTED:
                    # update params
                    pass
                
                # if image_66 is stopping this frame...
                if image_66.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_66.tStartRefresh + .8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_66.tStop = t  # not accounting for scr refresh
                        image_66.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_66.stopped')
                        # update status
                        image_66.status = FINISHED
                        image_66.setAutoDraw(False)
                
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
                for thisComponent in ITI_CombComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ITI_Comb" ---
            for thisComponent in ITI_CombComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('ITI_Comb.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.800000)
            
            # --- Prepare to start Routine "ISIcode" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('ISIcode.started', globalClock.getTime())
            # keep track of which components have finished
            ISIcodeComponents = []
            for thisComponent in ISIcodeComponents:
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
            
            # --- Run Routine "ISIcode" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
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
                for thisComponent in ISIcodeComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ISIcode" ---
            for thisComponent in ISIcodeComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('ISIcode.stopped', globalClock.getTime())
            # Run 'End Routine' code from pickISI
            # pick the ISI for the next routine
            # this code component is set to 'both' because we need to remove the 'np'
            # at the start of np.linspace (this is a python library JS won't know what to call. 
            
            # make range from a to b in n stepsizes
            ISIRange = np.linspace(1000, 1500, 500)
            
            # picking from a shuffled array is easier for random selection in JS
            shuffle(ISIRange)
            thisISI = ISIRange[0]/1000 # the first item of the shuffled array 
            
            # show in console for debugging
            print('thisISI: ', thisISI)
            
            # save this ISI to our output file
            trials.addData('ISI', thisISI)
            # the Routine "ISIcode" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "FixationComb_2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('FixationComb_2.started', globalClock.getTime())
            # keep track of which components have finished
            FixationComb_2Components = [image_67, image_68, image_69]
            for thisComponent in FixationComb_2Components:
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
            
            # --- Run Routine "FixationComb_2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_67* updates
                
                # if image_67 is starting this frame...
                if image_67.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_67.frameNStart = frameN  # exact frame index
                    image_67.tStart = t  # local t and not account for scr refresh
                    image_67.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_67, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_67.started')
                    # update status
                    image_67.status = STARTED
                    image_67.setAutoDraw(True)
                
                # if image_67 is active this frame...
                if image_67.status == STARTED:
                    # update params
                    pass
                
                # if image_67 is stopping this frame...
                if image_67.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_67.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_67.tStop = t  # not accounting for scr refresh
                        image_67.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_67.stopped')
                        # update status
                        image_67.status = FINISHED
                        image_67.setAutoDraw(False)
                
                # *image_68* updates
                
                # if image_68 is starting this frame...
                if image_68.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_68.frameNStart = frameN  # exact frame index
                    image_68.tStart = t  # local t and not account for scr refresh
                    image_68.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_68, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_68.started')
                    # update status
                    image_68.status = STARTED
                    image_68.setAutoDraw(True)
                
                # if image_68 is active this frame...
                if image_68.status == STARTED:
                    # update params
                    pass
                
                # if image_68 is stopping this frame...
                if image_68.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_68.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_68.tStop = t  # not accounting for scr refresh
                        image_68.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_68.stopped')
                        # update status
                        image_68.status = FINISHED
                        image_68.setAutoDraw(False)
                
                # *image_69* updates
                
                # if image_69 is starting this frame...
                if image_69.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_69.frameNStart = frameN  # exact frame index
                    image_69.tStart = t  # local t and not account for scr refresh
                    image_69.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_69, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_69.started')
                    # update status
                    image_69.status = STARTED
                    image_69.setAutoDraw(True)
                
                # if image_69 is active this frame...
                if image_69.status == STARTED:
                    # update params
                    pass
                
                # if image_69 is stopping this frame...
                if image_69.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_69.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_69.tStop = t  # not accounting for scr refresh
                        image_69.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_69.stopped')
                        # update status
                        image_69.status = FINISHED
                        image_69.setAutoDraw(False)
                
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
                for thisComponent in FixationComb_2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "FixationComb_2" ---
            for thisComponent in FixationComb_2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('FixationComb_2.stopped', globalClock.getTime())
            # the Routine "FixationComb_2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "cueComb_3" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('cueComb_3.started', globalClock.getTime())
            text_21.setText('颜色')
            # keep track of which components have finished
            cueComb_3Components = [image_75, image_76, text_21]
            for thisComponent in cueComb_3Components:
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
            
            # --- Run Routine "cueComb_3" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_75* updates
                
                # if image_75 is starting this frame...
                if image_75.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_75.frameNStart = frameN  # exact frame index
                    image_75.tStart = t  # local t and not account for scr refresh
                    image_75.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_75, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_75.started')
                    # update status
                    image_75.status = STARTED
                    image_75.setAutoDraw(True)
                
                # if image_75 is active this frame...
                if image_75.status == STARTED:
                    # update params
                    pass
                
                # if image_75 is stopping this frame...
                if image_75.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_75.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        image_75.tStop = t  # not accounting for scr refresh
                        image_75.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_75.stopped')
                        # update status
                        image_75.status = FINISHED
                        image_75.setAutoDraw(False)
                
                # *image_76* updates
                
                # if image_76 is starting this frame...
                if image_76.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_76.frameNStart = frameN  # exact frame index
                    image_76.tStart = t  # local t and not account for scr refresh
                    image_76.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_76, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_76.started')
                    # update status
                    image_76.status = STARTED
                    image_76.setAutoDraw(True)
                
                # if image_76 is active this frame...
                if image_76.status == STARTED:
                    # update params
                    pass
                
                # if image_76 is stopping this frame...
                if image_76.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_76.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        image_76.tStop = t  # not accounting for scr refresh
                        image_76.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_76.stopped')
                        # update status
                        image_76.status = FINISHED
                        image_76.setAutoDraw(False)
                
                # *text_21* updates
                
                # if text_21 is starting this frame...
                if text_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_21.frameNStart = frameN  # exact frame index
                    text_21.tStart = t  # local t and not account for scr refresh
                    text_21.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_21, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_21.started')
                    # update status
                    text_21.status = STARTED
                    text_21.setAutoDraw(True)
                
                # if text_21 is active this frame...
                if text_21.status == STARTED:
                    # update params
                    pass
                
                # if text_21 is stopping this frame...
                if text_21.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_21.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text_21.tStop = t  # not accounting for scr refresh
                        text_21.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_21.stopped')
                        # update status
                        text_21.status = FINISHED
                        text_21.setAutoDraw(False)
                
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
                for thisComponent in cueComb_3Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "cueComb_3" ---
            for thisComponent in cueComb_3Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('cueComb_3.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            
            # --- Prepare to start Routine "PracticeComb_2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('PracticeComb_2.started', globalClock.getTime())
            image_72.setImage(middleStim)
            key_resp_13.keys = []
            key_resp_13.rt = []
            _key_resp_13_allKeys = []
            # keep track of which components have finished
            PracticeComb_2Components = [image_72, image_73, image_74, key_resp_13]
            for thisComponent in PracticeComb_2Components:
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
            
            # --- Run Routine "PracticeComb_2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 10.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_72* updates
                
                # if image_72 is starting this frame...
                if image_72.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_72.frameNStart = frameN  # exact frame index
                    image_72.tStart = t  # local t and not account for scr refresh
                    image_72.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_72, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_72.started')
                    # update status
                    image_72.status = STARTED
                    image_72.setAutoDraw(True)
                
                # if image_72 is active this frame...
                if image_72.status == STARTED:
                    # update params
                    pass
                
                # if image_72 is stopping this frame...
                if image_72.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_72.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_72.tStop = t  # not accounting for scr refresh
                        image_72.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_72.stopped')
                        # update status
                        image_72.status = FINISHED
                        image_72.setAutoDraw(False)
                
                # *image_73* updates
                
                # if image_73 is starting this frame...
                if image_73.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_73.frameNStart = frameN  # exact frame index
                    image_73.tStart = t  # local t and not account for scr refresh
                    image_73.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_73, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_73.started')
                    # update status
                    image_73.status = STARTED
                    image_73.setAutoDraw(True)
                
                # if image_73 is active this frame...
                if image_73.status == STARTED:
                    # update params
                    pass
                
                # if image_73 is stopping this frame...
                if image_73.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_73.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_73.tStop = t  # not accounting for scr refresh
                        image_73.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_73.stopped')
                        # update status
                        image_73.status = FINISHED
                        image_73.setAutoDraw(False)
                
                # *image_74* updates
                
                # if image_74 is starting this frame...
                if image_74.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_74.frameNStart = frameN  # exact frame index
                    image_74.tStart = t  # local t and not account for scr refresh
                    image_74.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_74, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_74.started')
                    # update status
                    image_74.status = STARTED
                    image_74.setAutoDraw(True)
                
                # if image_74 is active this frame...
                if image_74.status == STARTED:
                    # update params
                    pass
                
                # if image_74 is stopping this frame...
                if image_74.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_74.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_74.tStop = t  # not accounting for scr refresh
                        image_74.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_74.stopped')
                        # update status
                        image_74.status = FINISHED
                        image_74.setAutoDraw(False)
                
                # *key_resp_13* updates
                waitOnFlip = False
                
                # if key_resp_13 is starting this frame...
                if key_resp_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_13.frameNStart = frameN  # exact frame index
                    key_resp_13.tStart = t  # local t and not account for scr refresh
                    key_resp_13.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_13, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_13.started')
                    # update status
                    key_resp_13.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_13.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_13.clearEvents, eventType='keyboard')  # clear events on next screen flip
                
                # if key_resp_13 is stopping this frame...
                if key_resp_13.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_13.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_13.tStop = t  # not accounting for scr refresh
                        key_resp_13.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp_13.stopped')
                        # update status
                        key_resp_13.status = FINISHED
                        key_resp_13.status = FINISHED
                if key_resp_13.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_13.getKeys(keyList=['z','m'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_13_allKeys.extend(theseKeys)
                    if len(_key_resp_13_allKeys):
                        key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
                        key_resp_13.rt = _key_resp_13_allKeys[-1].rt
                        key_resp_13.duration = _key_resp_13_allKeys[-1].duration
                        # was this correct?
                        if (key_resp_13.keys == str(corrAns)) or (key_resp_13.keys == corrAns):
                            key_resp_13.corr = 1
                        else:
                            key_resp_13.corr = 0
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
                for thisComponent in PracticeComb_2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "PracticeComb_2" ---
            for thisComponent in PracticeComb_2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('PracticeComb_2.stopped', globalClock.getTime())
            # check responses
            if key_resp_13.keys in ['', [], None]:  # No response was made
                key_resp_13.keys = None
                # was no response the correct answer?!
                if str(corrAns).lower() == 'none':
                   key_resp_13.corr = 1;  # correct non-response
                else:
                   key_resp_13.corr = 0;  # failed to respond (incorrectly)
            # store data for colorLoop (TrialHandler)
            colorLoop.addData('key_resp_13.keys',key_resp_13.keys)
            colorLoop.addData('key_resp_13.corr', key_resp_13.corr)
            if key_resp_13.keys != None:  # we had a response
                colorLoop.addData('key_resp_13.rt', key_resp_13.rt)
                colorLoop.addData('key_resp_13.duration', key_resp_13.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-10.000000)
            
            # --- Prepare to start Routine "stopColorLoop" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('stopColorLoop.started', globalClock.getTime())
            # keep track of which components have finished
            stopColorLoopComponents = []
            for thisComponent in stopColorLoopComponents:
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
            
            # --- Run Routine "stopColorLoop" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
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
                for thisComponent in stopColorLoopComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "stopColorLoop" ---
            for thisComponent in stopColorLoopComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('stopColorLoop.stopped', globalClock.getTime())
            # Run 'End Routine' code from code_10
            if colorLoopCounter==numFreq:
                colorLoop.finished=True
                shapeLoopCounter = 3-numFreq
            colorLoopCounter +=1
            # the Routine "stopColorLoop" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'colorLoop'
        
        
        # set up handler to look after randomisation of conditions etc
        shapeLoop = data.TrialHandler(nReps=1.0, method='fullRandom', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('resources/shape.csv'),
            seed=None, name='shapeLoop')
        thisExp.addLoop(shapeLoop)  # add the loop to the experiment
        thisShapeLoop = shapeLoop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisShapeLoop.rgb)
        if thisShapeLoop != None:
            for paramName in thisShapeLoop:
                globals()[paramName] = thisShapeLoop[paramName]
        
        for thisShapeLoop in shapeLoop:
            currentLoop = shapeLoop
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
            # abbreviate parameter names if possible (e.g. rgb = thisShapeLoop.rgb)
            if thisShapeLoop != None:
                for paramName in thisShapeLoop:
                    globals()[paramName] = thisShapeLoop[paramName]
            
            # --- Prepare to start Routine "ITI_Comb" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('ITI_Comb.started', globalClock.getTime())
            # keep track of which components have finished
            ITI_CombComponents = [image_65, image_66]
            for thisComponent in ITI_CombComponents:
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
            
            # --- Run Routine "ITI_Comb" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.8:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_65* updates
                
                # if image_65 is starting this frame...
                if image_65.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_65.frameNStart = frameN  # exact frame index
                    image_65.tStart = t  # local t and not account for scr refresh
                    image_65.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_65, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_65.started')
                    # update status
                    image_65.status = STARTED
                    image_65.setAutoDraw(True)
                
                # if image_65 is active this frame...
                if image_65.status == STARTED:
                    # update params
                    pass
                
                # if image_65 is stopping this frame...
                if image_65.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_65.tStartRefresh + .8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_65.tStop = t  # not accounting for scr refresh
                        image_65.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_65.stopped')
                        # update status
                        image_65.status = FINISHED
                        image_65.setAutoDraw(False)
                
                # *image_66* updates
                
                # if image_66 is starting this frame...
                if image_66.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_66.frameNStart = frameN  # exact frame index
                    image_66.tStart = t  # local t and not account for scr refresh
                    image_66.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_66, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_66.started')
                    # update status
                    image_66.status = STARTED
                    image_66.setAutoDraw(True)
                
                # if image_66 is active this frame...
                if image_66.status == STARTED:
                    # update params
                    pass
                
                # if image_66 is stopping this frame...
                if image_66.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_66.tStartRefresh + .8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_66.tStop = t  # not accounting for scr refresh
                        image_66.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_66.stopped')
                        # update status
                        image_66.status = FINISHED
                        image_66.setAutoDraw(False)
                
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
                for thisComponent in ITI_CombComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ITI_Comb" ---
            for thisComponent in ITI_CombComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('ITI_Comb.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.800000)
            
            # --- Prepare to start Routine "ISIcode" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('ISIcode.started', globalClock.getTime())
            # keep track of which components have finished
            ISIcodeComponents = []
            for thisComponent in ISIcodeComponents:
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
            
            # --- Run Routine "ISIcode" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
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
                for thisComponent in ISIcodeComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ISIcode" ---
            for thisComponent in ISIcodeComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('ISIcode.stopped', globalClock.getTime())
            # Run 'End Routine' code from pickISI
            # pick the ISI for the next routine
            # this code component is set to 'both' because we need to remove the 'np'
            # at the start of np.linspace (this is a python library JS won't know what to call. 
            
            # make range from a to b in n stepsizes
            ISIRange = np.linspace(1000, 1500, 500)
            
            # picking from a shuffled array is easier for random selection in JS
            shuffle(ISIRange)
            thisISI = ISIRange[0]/1000 # the first item of the shuffled array 
            
            # show in console for debugging
            print('thisISI: ', thisISI)
            
            # save this ISI to our output file
            trials.addData('ISI', thisISI)
            # the Routine "ISIcode" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "FixationComb_2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('FixationComb_2.started', globalClock.getTime())
            # keep track of which components have finished
            FixationComb_2Components = [image_67, image_68, image_69]
            for thisComponent in FixationComb_2Components:
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
            
            # --- Run Routine "FixationComb_2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_67* updates
                
                # if image_67 is starting this frame...
                if image_67.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_67.frameNStart = frameN  # exact frame index
                    image_67.tStart = t  # local t and not account for scr refresh
                    image_67.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_67, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_67.started')
                    # update status
                    image_67.status = STARTED
                    image_67.setAutoDraw(True)
                
                # if image_67 is active this frame...
                if image_67.status == STARTED:
                    # update params
                    pass
                
                # if image_67 is stopping this frame...
                if image_67.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_67.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_67.tStop = t  # not accounting for scr refresh
                        image_67.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_67.stopped')
                        # update status
                        image_67.status = FINISHED
                        image_67.setAutoDraw(False)
                
                # *image_68* updates
                
                # if image_68 is starting this frame...
                if image_68.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_68.frameNStart = frameN  # exact frame index
                    image_68.tStart = t  # local t and not account for scr refresh
                    image_68.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_68, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_68.started')
                    # update status
                    image_68.status = STARTED
                    image_68.setAutoDraw(True)
                
                # if image_68 is active this frame...
                if image_68.status == STARTED:
                    # update params
                    pass
                
                # if image_68 is stopping this frame...
                if image_68.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_68.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_68.tStop = t  # not accounting for scr refresh
                        image_68.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_68.stopped')
                        # update status
                        image_68.status = FINISHED
                        image_68.setAutoDraw(False)
                
                # *image_69* updates
                
                # if image_69 is starting this frame...
                if image_69.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_69.frameNStart = frameN  # exact frame index
                    image_69.tStart = t  # local t and not account for scr refresh
                    image_69.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_69, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_69.started')
                    # update status
                    image_69.status = STARTED
                    image_69.setAutoDraw(True)
                
                # if image_69 is active this frame...
                if image_69.status == STARTED:
                    # update params
                    pass
                
                # if image_69 is stopping this frame...
                if image_69.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_69.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_69.tStop = t  # not accounting for scr refresh
                        image_69.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_69.stopped')
                        # update status
                        image_69.status = FINISHED
                        image_69.setAutoDraw(False)
                
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
                for thisComponent in FixationComb_2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "FixationComb_2" ---
            for thisComponent in FixationComb_2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('FixationComb_2.stopped', globalClock.getTime())
            # the Routine "FixationComb_2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "cueComb_2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('cueComb_2.started', globalClock.getTime())
            text_20.setText('形状')
            # keep track of which components have finished
            cueComb_2Components = [image_70, image_71, text_20]
            for thisComponent in cueComb_2Components:
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
            
            # --- Run Routine "cueComb_2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_70* updates
                
                # if image_70 is starting this frame...
                if image_70.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_70.frameNStart = frameN  # exact frame index
                    image_70.tStart = t  # local t and not account for scr refresh
                    image_70.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_70, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_70.started')
                    # update status
                    image_70.status = STARTED
                    image_70.setAutoDraw(True)
                
                # if image_70 is active this frame...
                if image_70.status == STARTED:
                    # update params
                    pass
                
                # if image_70 is stopping this frame...
                if image_70.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_70.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        image_70.tStop = t  # not accounting for scr refresh
                        image_70.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_70.stopped')
                        # update status
                        image_70.status = FINISHED
                        image_70.setAutoDraw(False)
                
                # *image_71* updates
                
                # if image_71 is starting this frame...
                if image_71.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_71.frameNStart = frameN  # exact frame index
                    image_71.tStart = t  # local t and not account for scr refresh
                    image_71.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_71, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_71.started')
                    # update status
                    image_71.status = STARTED
                    image_71.setAutoDraw(True)
                
                # if image_71 is active this frame...
                if image_71.status == STARTED:
                    # update params
                    pass
                
                # if image_71 is stopping this frame...
                if image_71.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_71.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        image_71.tStop = t  # not accounting for scr refresh
                        image_71.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_71.stopped')
                        # update status
                        image_71.status = FINISHED
                        image_71.setAutoDraw(False)
                
                # *text_20* updates
                
                # if text_20 is starting this frame...
                if text_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_20.frameNStart = frameN  # exact frame index
                    text_20.tStart = t  # local t and not account for scr refresh
                    text_20.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_20, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_20.started')
                    # update status
                    text_20.status = STARTED
                    text_20.setAutoDraw(True)
                
                # if text_20 is active this frame...
                if text_20.status == STARTED:
                    # update params
                    pass
                
                # if text_20 is stopping this frame...
                if text_20.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_20.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text_20.tStop = t  # not accounting for scr refresh
                        text_20.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_20.stopped')
                        # update status
                        text_20.status = FINISHED
                        text_20.setAutoDraw(False)
                
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
                for thisComponent in cueComb_2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "cueComb_2" ---
            for thisComponent in cueComb_2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('cueComb_2.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            
            # --- Prepare to start Routine "PracticeComb_2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('PracticeComb_2.started', globalClock.getTime())
            image_72.setImage(middleStim)
            key_resp_13.keys = []
            key_resp_13.rt = []
            _key_resp_13_allKeys = []
            # keep track of which components have finished
            PracticeComb_2Components = [image_72, image_73, image_74, key_resp_13]
            for thisComponent in PracticeComb_2Components:
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
            
            # --- Run Routine "PracticeComb_2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 10.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_72* updates
                
                # if image_72 is starting this frame...
                if image_72.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_72.frameNStart = frameN  # exact frame index
                    image_72.tStart = t  # local t and not account for scr refresh
                    image_72.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_72, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_72.started')
                    # update status
                    image_72.status = STARTED
                    image_72.setAutoDraw(True)
                
                # if image_72 is active this frame...
                if image_72.status == STARTED:
                    # update params
                    pass
                
                # if image_72 is stopping this frame...
                if image_72.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_72.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_72.tStop = t  # not accounting for scr refresh
                        image_72.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_72.stopped')
                        # update status
                        image_72.status = FINISHED
                        image_72.setAutoDraw(False)
                
                # *image_73* updates
                
                # if image_73 is starting this frame...
                if image_73.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_73.frameNStart = frameN  # exact frame index
                    image_73.tStart = t  # local t and not account for scr refresh
                    image_73.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_73, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_73.started')
                    # update status
                    image_73.status = STARTED
                    image_73.setAutoDraw(True)
                
                # if image_73 is active this frame...
                if image_73.status == STARTED:
                    # update params
                    pass
                
                # if image_73 is stopping this frame...
                if image_73.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_73.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_73.tStop = t  # not accounting for scr refresh
                        image_73.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_73.stopped')
                        # update status
                        image_73.status = FINISHED
                        image_73.setAutoDraw(False)
                
                # *image_74* updates
                
                # if image_74 is starting this frame...
                if image_74.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_74.frameNStart = frameN  # exact frame index
                    image_74.tStart = t  # local t and not account for scr refresh
                    image_74.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_74, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_74.started')
                    # update status
                    image_74.status = STARTED
                    image_74.setAutoDraw(True)
                
                # if image_74 is active this frame...
                if image_74.status == STARTED:
                    # update params
                    pass
                
                # if image_74 is stopping this frame...
                if image_74.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_74.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_74.tStop = t  # not accounting for scr refresh
                        image_74.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_74.stopped')
                        # update status
                        image_74.status = FINISHED
                        image_74.setAutoDraw(False)
                
                # *key_resp_13* updates
                waitOnFlip = False
                
                # if key_resp_13 is starting this frame...
                if key_resp_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_13.frameNStart = frameN  # exact frame index
                    key_resp_13.tStart = t  # local t and not account for scr refresh
                    key_resp_13.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_13, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_13.started')
                    # update status
                    key_resp_13.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_13.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_13.clearEvents, eventType='keyboard')  # clear events on next screen flip
                
                # if key_resp_13 is stopping this frame...
                if key_resp_13.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_13.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_13.tStop = t  # not accounting for scr refresh
                        key_resp_13.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp_13.stopped')
                        # update status
                        key_resp_13.status = FINISHED
                        key_resp_13.status = FINISHED
                if key_resp_13.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_13.getKeys(keyList=['z','m'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_13_allKeys.extend(theseKeys)
                    if len(_key_resp_13_allKeys):
                        key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
                        key_resp_13.rt = _key_resp_13_allKeys[-1].rt
                        key_resp_13.duration = _key_resp_13_allKeys[-1].duration
                        # was this correct?
                        if (key_resp_13.keys == str(corrAns)) or (key_resp_13.keys == corrAns):
                            key_resp_13.corr = 1
                        else:
                            key_resp_13.corr = 0
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
                for thisComponent in PracticeComb_2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "PracticeComb_2" ---
            for thisComponent in PracticeComb_2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('PracticeComb_2.stopped', globalClock.getTime())
            # check responses
            if key_resp_13.keys in ['', [], None]:  # No response was made
                key_resp_13.keys = None
                # was no response the correct answer?!
                if str(corrAns).lower() == 'none':
                   key_resp_13.corr = 1;  # correct non-response
                else:
                   key_resp_13.corr = 0;  # failed to respond (incorrectly)
            # store data for shapeLoop (TrialHandler)
            shapeLoop.addData('key_resp_13.keys',key_resp_13.keys)
            shapeLoop.addData('key_resp_13.corr', key_resp_13.corr)
            if key_resp_13.keys != None:  # we had a response
                shapeLoop.addData('key_resp_13.rt', key_resp_13.rt)
                shapeLoop.addData('key_resp_13.duration', key_resp_13.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-10.000000)
            
            # --- Prepare to start Routine "stopShapeLoop" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('stopShapeLoop.started', globalClock.getTime())
            # keep track of which components have finished
            stopShapeLoopComponents = []
            for thisComponent in stopShapeLoopComponents:
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
            
            # --- Run Routine "stopShapeLoop" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
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
                for thisComponent in stopShapeLoopComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "stopShapeLoop" ---
            for thisComponent in stopShapeLoopComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('stopShapeLoop.stopped', globalClock.getTime())
            # Run 'End Routine' code from code_13
            if shapeLoopCounter==0:
                shapeLoop.finished=True
            shapeLoopCounter -=1
            # the Routine "stopShapeLoop" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'shapeLoop'
        
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1.0 repeats of 'LoopSelectFreqNumber'
    
    
    # --- Prepare to start Routine "ThankYou" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ThankYou.started', globalClock.getTime())
    # keep track of which components have finished
    ThankYouComponents = [text_19]
    for thisComponent in ThankYouComponents:
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
    
    # --- Run Routine "ThankYou" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_19* updates
        
        # if text_19 is starting this frame...
        if text_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_19.frameNStart = frameN  # exact frame index
            text_19.tStart = t  # local t and not account for scr refresh
            text_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_19, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_19.started')
            # update status
            text_19.status = STARTED
            text_19.setAutoDraw(True)
        
        # if text_19 is active this frame...
        if text_19.status == STARTED:
            # update params
            pass
        
        # if text_19 is stopping this frame...
        if text_19.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_19.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                text_19.tStop = t  # not accounting for scr refresh
                text_19.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_19.stopped')
                # update status
                text_19.status = FINISHED
                text_19.setAutoDraw(False)
        
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
        for thisComponent in ThankYouComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ThankYou" ---
    for thisComponent in ThankYouComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ThankYou.stopped', globalClock.getTime())
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.000000)
    
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
