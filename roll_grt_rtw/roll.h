/*
 * roll.h
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

#ifndef RTW_HEADER_roll_h_
#define RTW_HEADER_roll_h_
#ifndef roll_COMMON_INCLUDES_
#define roll_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "rtw_continuous.h"
#include "rtw_solver.h"
#include "rt_logging.h"
#endif                                 /* roll_COMMON_INCLUDES_ */

#include "roll_types.h"
#include <float.h>
#include <string.h>
#include <stddef.h>
#include "rt_nonfinite.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetFinalTime
#define rtmGetFinalTime(rtm)           ((rtm)->Timing.tFinal)
#endif

#ifndef rtmGetRTWLogInfo
#define rtmGetRTWLogInfo(rtm)          ((rtm)->rtwLogInfo)
#endif

#ifndef rtmGetErrorStatus
#define rtmGetErrorStatus(rtm)         ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
#define rtmSetErrorStatus(rtm, val)    ((rtm)->errorStatus = (val))
#endif

#ifndef rtmGetStopRequested
#define rtmGetStopRequested(rtm)       ((rtm)->Timing.stopRequestedFlag)
#endif

#ifndef rtmSetStopRequested
#define rtmSetStopRequested(rtm, val)  ((rtm)->Timing.stopRequestedFlag = (val))
#endif

#ifndef rtmGetStopRequestedPtr
#define rtmGetStopRequestedPtr(rtm)    (&((rtm)->Timing.stopRequestedFlag))
#endif

#ifndef rtmGetT
#define rtmGetT(rtm)                   ((rtm)->Timing.taskTime0)
#endif

#ifndef rtmGetTFinal
#define rtmGetTFinal(rtm)              ((rtm)->Timing.tFinal)
#endif

#ifndef rtmGetTPtr
#define rtmGetTPtr(rtm)                (&(rtm)->Timing.taskTime0)
#endif

/* Block states (default storage) for system '<Root>' */
typedef struct {
  real_T Integrator_DSTATE;            /* '<S33>/Integrator' */
} DW_roll_T;

/* External inputs (root inport signals with default storage) */
typedef struct {
  real_T u;                            /* '<Root>/u' */
} ExtU_roll_T;

/* External outputs (root outports fed by signals with default storage) */
typedef struct {
  real_T y;                            /* '<Root>/y' */
} ExtY_roll_T;

/* Parameters (default storage) */
struct P_roll_T_ {
  real_T roll_rate_Controller_I;       /* Mask Parameter: roll_rate_Controller_I
                                        * Referenced by: '<S30>/Integral Gain'
                                        */
  real_T roll_rate_Controller_InitialCon;
                              /* Mask Parameter: roll_rate_Controller_InitialCon
                               * Referenced by: '<S33>/Integrator'
                               */
  real_T roll_rate_Controller_P;       /* Mask Parameter: roll_rate_Controller_P
                                        * Referenced by: '<S31>/Proportional Gain'
                                        */
  real_T Integrator_gainval;           /* Computed Parameter: Integrator_gainval
                                        * Referenced by: '<S33>/Integrator'
                                        */
};

/* Real-time Model Data Structure */
struct tag_RTM_roll_T {
  const char_T *errorStatus;
  RTWLogInfo *rtwLogInfo;

  /*
   * Timing:
   * The following substructure contains information regarding
   * the timing information for the model.
   */
  struct {
    time_T taskTime0;
    uint32_T clockTick0;
    uint32_T clockTickH0;
    time_T stepSize0;
    time_T tFinal;
    boolean_T stopRequestedFlag;
  } Timing;
};

/* Block parameters (default storage) */
extern P_roll_T roll_P;

/* Block states (default storage) */
extern DW_roll_T roll_DW;

/* External inputs (root inport signals with default storage) */
extern ExtU_roll_T roll_U;

/* External outputs (root outports fed by signals with default storage) */
extern ExtY_roll_T roll_Y;

/* Model entry point functions */
extern void roll_initialize(void);
extern void roll_step(void);
extern void roll_terminate(void);

/* Real-time Model object */
extern RT_MODEL_roll_T *const roll_M;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Note that this particular code originates from a subsystem build,
 * and has its own system numbers different from the parent model.
 * Refer to the system hierarchy for this subsystem below, and use the
 * MATLAB hilite_system command to trace the generated code back
 * to the parent model.  For example,
 *
 * hilite_system('drone_controller_gazebo/roll _rate_Controller')    - opens subsystem drone_controller_gazebo/roll _rate_Controller
 * hilite_system('drone_controller_gazebo/roll _rate_Controller/Kp') - opens and selects block Kp
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'drone_controller_gazebo'
 * '<S1>'   : 'drone_controller_gazebo/roll _rate_Controller'
 * '<S2>'   : 'drone_controller_gazebo/roll _rate_Controller/Anti-windup'
 * '<S3>'   : 'drone_controller_gazebo/roll _rate_Controller/D Gain'
 * '<S4>'   : 'drone_controller_gazebo/roll _rate_Controller/Filter'
 * '<S5>'   : 'drone_controller_gazebo/roll _rate_Controller/Filter ICs'
 * '<S6>'   : 'drone_controller_gazebo/roll _rate_Controller/I Gain'
 * '<S7>'   : 'drone_controller_gazebo/roll _rate_Controller/Ideal P Gain'
 * '<S8>'   : 'drone_controller_gazebo/roll _rate_Controller/Ideal P Gain Fdbk'
 * '<S9>'   : 'drone_controller_gazebo/roll _rate_Controller/Integrator'
 * '<S10>'  : 'drone_controller_gazebo/roll _rate_Controller/Integrator ICs'
 * '<S11>'  : 'drone_controller_gazebo/roll _rate_Controller/N Copy'
 * '<S12>'  : 'drone_controller_gazebo/roll _rate_Controller/N Gain'
 * '<S13>'  : 'drone_controller_gazebo/roll _rate_Controller/P Copy'
 * '<S14>'  : 'drone_controller_gazebo/roll _rate_Controller/Parallel P Gain'
 * '<S15>'  : 'drone_controller_gazebo/roll _rate_Controller/Reset Signal'
 * '<S16>'  : 'drone_controller_gazebo/roll _rate_Controller/Saturation'
 * '<S17>'  : 'drone_controller_gazebo/roll _rate_Controller/Saturation Fdbk'
 * '<S18>'  : 'drone_controller_gazebo/roll _rate_Controller/Sum'
 * '<S19>'  : 'drone_controller_gazebo/roll _rate_Controller/Sum Fdbk'
 * '<S20>'  : 'drone_controller_gazebo/roll _rate_Controller/Tracking Mode'
 * '<S21>'  : 'drone_controller_gazebo/roll _rate_Controller/Tracking Mode Sum'
 * '<S22>'  : 'drone_controller_gazebo/roll _rate_Controller/Tsamp - Integral'
 * '<S23>'  : 'drone_controller_gazebo/roll _rate_Controller/Tsamp - Ngain'
 * '<S24>'  : 'drone_controller_gazebo/roll _rate_Controller/postSat Signal'
 * '<S25>'  : 'drone_controller_gazebo/roll _rate_Controller/preSat Signal'
 * '<S26>'  : 'drone_controller_gazebo/roll _rate_Controller/Anti-windup/Passthrough'
 * '<S27>'  : 'drone_controller_gazebo/roll _rate_Controller/D Gain/Disabled'
 * '<S28>'  : 'drone_controller_gazebo/roll _rate_Controller/Filter/Disabled'
 * '<S29>'  : 'drone_controller_gazebo/roll _rate_Controller/Filter ICs/Disabled'
 * '<S30>'  : 'drone_controller_gazebo/roll _rate_Controller/I Gain/Internal Parameters'
 * '<S31>'  : 'drone_controller_gazebo/roll _rate_Controller/Ideal P Gain/Internal Parameters'
 * '<S32>'  : 'drone_controller_gazebo/roll _rate_Controller/Ideal P Gain Fdbk/Disabled'
 * '<S33>'  : 'drone_controller_gazebo/roll _rate_Controller/Integrator/Discrete'
 * '<S34>'  : 'drone_controller_gazebo/roll _rate_Controller/Integrator ICs/Internal IC'
 * '<S35>'  : 'drone_controller_gazebo/roll _rate_Controller/N Copy/Disabled wSignal Specification'
 * '<S36>'  : 'drone_controller_gazebo/roll _rate_Controller/N Gain/Disabled'
 * '<S37>'  : 'drone_controller_gazebo/roll _rate_Controller/P Copy/Disabled'
 * '<S38>'  : 'drone_controller_gazebo/roll _rate_Controller/Parallel P Gain/Passthrough'
 * '<S39>'  : 'drone_controller_gazebo/roll _rate_Controller/Reset Signal/Disabled'
 * '<S40>'  : 'drone_controller_gazebo/roll _rate_Controller/Saturation/Passthrough'
 * '<S41>'  : 'drone_controller_gazebo/roll _rate_Controller/Saturation Fdbk/Disabled'
 * '<S42>'  : 'drone_controller_gazebo/roll _rate_Controller/Sum/Sum_PI'
 * '<S43>'  : 'drone_controller_gazebo/roll _rate_Controller/Sum Fdbk/Disabled'
 * '<S44>'  : 'drone_controller_gazebo/roll _rate_Controller/Tracking Mode/Disabled'
 * '<S45>'  : 'drone_controller_gazebo/roll _rate_Controller/Tracking Mode Sum/Passthrough'
 * '<S46>'  : 'drone_controller_gazebo/roll _rate_Controller/Tsamp - Integral/Passthrough'
 * '<S47>'  : 'drone_controller_gazebo/roll _rate_Controller/Tsamp - Ngain/Passthrough'
 * '<S48>'  : 'drone_controller_gazebo/roll _rate_Controller/postSat Signal/Forward_Path'
 * '<S49>'  : 'drone_controller_gazebo/roll _rate_Controller/preSat Signal/Forward_Path'
 */
#endif                                 /* RTW_HEADER_roll_h_ */
