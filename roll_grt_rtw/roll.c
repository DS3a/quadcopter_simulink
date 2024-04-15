/*
 * roll.c
 *
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * Code generation for model "roll".
 *
 * Model version              : 1.33
 * Simulink Coder version : 9.8 (R2022b) 13-May-2022
 * C source code generated on : Mon Apr 15 07:24:34 2024
 *
 * Target selection: grt.tlc
 * Note: GRT includes extra infrastructure and instrumentation for prototyping
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "roll.h"
#include "roll_private.h"
#include <string.h>
#include "rt_nonfinite.h"

/* Block states (default storage) */
DW_roll_T roll_DW;

/* External inputs (root inport signals with default storage) */
ExtU_roll_T roll_U;

/* External outputs (root outports fed by signals with default storage) */
ExtY_roll_T roll_Y;

/* Real-time model */
static RT_MODEL_roll_T roll_M_;
RT_MODEL_roll_T *const roll_M = &roll_M_;

/* Model step function */
void roll_step(void)
{
  /* Outport: '<Root>/y' incorporates:
   *  DiscreteIntegrator: '<S33>/Integrator'
   *  Gain: '<S31>/Proportional Gain'
   *  Inport: '<Root>/u'
   *  Sum: '<S42>/Sum'
   */
  roll_Y.y = (roll_U.u + roll_DW.Integrator_DSTATE) *
    roll_P.roll_rate_Controller_P;

  /* Update for DiscreteIntegrator: '<S33>/Integrator' incorporates:
   *  Gain: '<S30>/Integral Gain'
   *  Inport: '<Root>/u'
   */
  roll_DW.Integrator_DSTATE += roll_P.roll_rate_Controller_I * roll_U.u *
    roll_P.Integrator_gainval;

  /* Matfile logging */
  rt_UpdateTXYLogVars(roll_M->rtwLogInfo, (&roll_M->Timing.taskTime0));

  /* signal main to stop simulation */
  {                                    /* Sample time: [0.002s, 0.0s] */
    if ((rtmGetTFinal(roll_M)!=-1) &&
        !((rtmGetTFinal(roll_M)-roll_M->Timing.taskTime0) >
          roll_M->Timing.taskTime0 * (DBL_EPSILON))) {
      rtmSetErrorStatus(roll_M, "Simulation finished");
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
  if (!(++roll_M->Timing.clockTick0)) {
    ++roll_M->Timing.clockTickH0;
  }

  roll_M->Timing.taskTime0 = roll_M->Timing.clockTick0 *
    roll_M->Timing.stepSize0 + roll_M->Timing.clockTickH0 *
    roll_M->Timing.stepSize0 * 4294967296.0;
}

/* Model initialize function */
void roll_initialize(void)
{
  /* Registration code */

  /* initialize non-finites */
  rt_InitInfAndNaN(sizeof(real_T));

  /* initialize real-time model */
  (void) memset((void *)roll_M, 0,
                sizeof(RT_MODEL_roll_T));
  rtmSetTFinal(roll_M, 5.0);
  roll_M->Timing.stepSize0 = 0.002;

  /* Setup for data logging */
  {
    static RTWLogInfo rt_DataLoggingInfo;
    rt_DataLoggingInfo.loggingInterval = (NULL);
    roll_M->rtwLogInfo = &rt_DataLoggingInfo;
  }

  /* Setup for data logging */
  {
    rtliSetLogXSignalInfo(roll_M->rtwLogInfo, (NULL));
    rtliSetLogXSignalPtrs(roll_M->rtwLogInfo, (NULL));
    rtliSetLogT(roll_M->rtwLogInfo, "tout");
    rtliSetLogX(roll_M->rtwLogInfo, "");
    rtliSetLogXFinal(roll_M->rtwLogInfo, "");
    rtliSetLogVarNameModifier(roll_M->rtwLogInfo, "rt_");
    rtliSetLogFormat(roll_M->rtwLogInfo, 4);
    rtliSetLogMaxRows(roll_M->rtwLogInfo, 0);
    rtliSetLogDecimation(roll_M->rtwLogInfo, 1);
    rtliSetLogY(roll_M->rtwLogInfo, "");
    rtliSetLogYSignalInfo(roll_M->rtwLogInfo, (NULL));
    rtliSetLogYSignalPtrs(roll_M->rtwLogInfo, (NULL));
  }

  /* states (dwork) */
  (void) memset((void *)&roll_DW, 0,
                sizeof(DW_roll_T));

  /* external inputs */
  roll_U.u = 0.0;

  /* external outputs */
  roll_Y.y = 0.0;

  /* Matfile logging */
  rt_StartDataLoggingWithStartTime(roll_M->rtwLogInfo, 0.0, rtmGetTFinal(roll_M),
    roll_M->Timing.stepSize0, (&rtmGetErrorStatus(roll_M)));

  /* InitializeConditions for DiscreteIntegrator: '<S33>/Integrator' */
  roll_DW.Integrator_DSTATE = roll_P.roll_rate_Controller_InitialCon;
}

/* Model terminate function */
void roll_terminate(void)
{
  /* (no terminate code required) */
}
