/*
 * pitch_rate_Controller.c
 *
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * Code generation for model "pitch_rate_Controller".
 *
 * Model version              : 1.33
 * Simulink Coder version : 9.8 (R2022b) 13-May-2022
 * C source code generated on : Mon Apr 15 07:25:02 2024
 *
 * Target selection: grt.tlc
 * Note: GRT includes extra infrastructure and instrumentation for prototyping
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "pitch_rate_Controller.h"
#include "pitch_rate_Controller_private.h"
#include <string.h>
#include "rt_nonfinite.h"

/* Block states (default storage) */
DW_pitch_rate_Controller_T pitch_rate_Controller_DW;

/* External inputs (root inport signals with default storage) */
ExtU_pitch_rate_Controller_T pitch_rate_Controller_U;

/* External outputs (root outports fed by signals with default storage) */
ExtY_pitch_rate_Controller_T pitch_rate_Controller_Y;

/* Real-time model */
static RT_MODEL_pitch_rate_Controlle_T pitch_rate_Controller_M_;
RT_MODEL_pitch_rate_Controlle_T *const pitch_rate_Controller_M =
  &pitch_rate_Controller_M_;

/* Model step function */
void pitch_rate_Controller_step(void)
{
  /* Outport: '<Root>/y' incorporates:
   *  DiscreteIntegrator: '<S33>/Integrator'
   *  Gain: '<S38>/Proportional Gain'
   *  Inport: '<Root>/u'
   *  Sum: '<S42>/Sum'
   */
  pitch_rate_Controller_Y.y = pitch_rate_Controller_P.pitch_rate_Controller_P *
    pitch_rate_Controller_U.u + pitch_rate_Controller_DW.Integrator_DSTATE;

  /* Update for DiscreteIntegrator: '<S33>/Integrator' incorporates:
   *  Gain: '<S30>/Integral Gain'
   *  Inport: '<Root>/u'
   */
  pitch_rate_Controller_DW.Integrator_DSTATE +=
    pitch_rate_Controller_P.pitch_rate_Controller_I * pitch_rate_Controller_U.u *
    pitch_rate_Controller_P.Integrator_gainval;

  /* Matfile logging */
  rt_UpdateTXYLogVars(pitch_rate_Controller_M->rtwLogInfo,
                      (&pitch_rate_Controller_M->Timing.taskTime0));

  /* signal main to stop simulation */
  {                                    /* Sample time: [0.002s, 0.0s] */
    if ((rtmGetTFinal(pitch_rate_Controller_M)!=-1) &&
        !((rtmGetTFinal(pitch_rate_Controller_M)-
           pitch_rate_Controller_M->Timing.taskTime0) >
          pitch_rate_Controller_M->Timing.taskTime0 * (DBL_EPSILON))) {
      rtmSetErrorStatus(pitch_rate_Controller_M, "Simulation finished");
    }
  }

  /* Update absolute time for base rate */
  /* The "clockTick0" counts the number of times the code of this task has
   * been executed. The absolute time is the multiplication of "clockTick0"
   * and "Timing.stepSize0". Size of "clockTick0" ensures timer will not
   * overflow during the application lifespan selected.
   * Timer of this task consists of two 32 bit unsigned integers.
   * The two integers represent the low bits Timing.clockTick0 and the high bits
   * Timing.clockTickH0. When the low bit overflows to 0, the high bits increment.
   */
  if (!(++pitch_rate_Controller_M->Timing.clockTick0)) {
    ++pitch_rate_Controller_M->Timing.clockTickH0;
  }

  pitch_rate_Controller_M->Timing.taskTime0 =
    pitch_rate_Controller_M->Timing.clockTick0 *
    pitch_rate_Controller_M->Timing.stepSize0 +
    pitch_rate_Controller_M->Timing.clockTickH0 *
    pitch_rate_Controller_M->Timing.stepSize0 * 4294967296.0;
}

/* Model initialize function */
void pitch_rate_Controller_initialize(void)
{
  /* Registration code */

  /* initialize non-finites */
  rt_InitInfAndNaN(sizeof(real_T));

  /* initialize real-time model */
  (void) memset((void *)pitch_rate_Controller_M, 0,
                sizeof(RT_MODEL_pitch_rate_Controlle_T));
  rtmSetTFinal(pitch_rate_Controller_M, 5.0);
  pitch_rate_Controller_M->Timing.stepSize0 = 0.002;

  /* Setup for data logging */
  {
    static RTWLogInfo rt_DataLoggingInfo;
    rt_DataLoggingInfo.loggingInterval = (NULL);
    pitch_rate_Controller_M->rtwLogInfo = &rt_DataLoggingInfo;
  }

  /* Setup for data logging */
  {
    rtliSetLogXSignalInfo(pitch_rate_Controller_M->rtwLogInfo, (NULL));
    rtliSetLogXSignalPtrs(pitch_rate_Controller_M->rtwLogInfo, (NULL));
    rtliSetLogT(pitch_rate_Controller_M->rtwLogInfo, "tout");
    rtliSetLogX(pitch_rate_Controller_M->rtwLogInfo, "");
    rtliSetLogXFinal(pitch_rate_Controller_M->rtwLogInfo, "");
    rtliSetLogVarNameModifier(pitch_rate_Controller_M->rtwLogInfo, "rt_");
    rtliSetLogFormat(pitch_rate_Controller_M->rtwLogInfo, 4);
    rtliSetLogMaxRows(pitch_rate_Controller_M->rtwLogInfo, 0);
    rtliSetLogDecimation(pitch_rate_Controller_M->rtwLogInfo, 1);
    rtliSetLogY(pitch_rate_Controller_M->rtwLogInfo, "");
    rtliSetLogYSignalInfo(pitch_rate_Controller_M->rtwLogInfo, (NULL));
    rtliSetLogYSignalPtrs(pitch_rate_Controller_M->rtwLogInfo, (NULL));
  }

  /* states (dwork) */
  (void) memset((void *)&pitch_rate_Controller_DW, 0,
                sizeof(DW_pitch_rate_Controller_T));

  /* external inputs */
  pitch_rate_Controller_U.u = 0.0;

  /* external outputs */
  pitch_rate_Controller_Y.y = 0.0;

  /* Matfile logging */
  rt_StartDataLoggingWithStartTime(pitch_rate_Controller_M->rtwLogInfo, 0.0,
    rtmGetTFinal(pitch_rate_Controller_M),
    pitch_rate_Controller_M->Timing.stepSize0, (&rtmGetErrorStatus
    (pitch_rate_Controller_M)));

  /* InitializeConditions for DiscreteIntegrator: '<S33>/Integrator' */
  pitch_rate_Controller_DW.Integrator_DSTATE =
    pitch_rate_Controller_P.pitch_rate_Controller_InitialCo;
}

/* Model terminate function */
void pitch_rate_Controller_terminate(void)
{
  /* (no terminate code required) */
}
