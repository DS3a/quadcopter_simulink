var dataJson = {"arch":{"ispc":true,"isunix":false,"ismac":false},"build":"drone_controller_gazebo/pitch_pid","ref":false,"files":[{"name":"ert_main.c","type":"source","group":"main","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\pitch_pid_ert_rtw","tag":"","groupDisplay":"Main file","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: ert_main.c\r\n *\r\n * Code generated for Simulink model 'pitch_pid'.\r\n *\r\n * Model version                  : 1.57\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Tue Apr 23 06:48:21 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#include <stddef.h>\r\n#include <stdio.h>            /* This example main program uses printf/fflush */\r\n#include \"pitch_pid.h\"                 /* Model header file */\r\n\r\n/*\r\n * Associating rt_OneStep with a real-time clock or interrupt service routine\r\n * is what makes the generated code \"real-time\".  The function rt_OneStep is\r\n * always associated with the base rate of the model.  Subrates are managed\r\n * by the base rate from inside the generated code.  Enabling/disabling\r\n * interrupts and floating point context switches are target specific.  This\r\n * example code indicates where these should take place relative to executing\r\n * the generated code step function.  Overrun behavior should be tailored to\r\n * your application needs.  This example simply sets an error status in the\r\n * real-time model and returns from rt_OneStep.\r\n */\r\nvoid rt_OneStep(void);\r\nvoid rt_OneStep(void)\r\n{\r\n  static boolean_T OverrunFlag = false;\r\n\r\n  /* Disable interrupts here */\r\n\r\n  /* Check for overrun */\r\n  if (OverrunFlag) {\r\n    rtmSetErrorStatus(pitch_pid_M, \"Overrun\");\r\n    return;\r\n  }\r\n\r\n  OverrunFlag = true;\r\n\r\n  /* Save FPU context here (if necessary) */\r\n  /* Re-enable timer or interrupt here */\r\n  /* Set model inputs here */\r\n\r\n  /* Step the model */\r\n  pitch_pid_step();\r\n\r\n  /* Get model outputs here */\r\n\r\n  /* Indicate task complete */\r\n  OverrunFlag = false;\r\n\r\n  /* Disable interrupts here */\r\n  /* Restore FPU context here (if necessary) */\r\n  /* Enable interrupts here */\r\n}\r\n\r\n/*\r\n * The example main function illustrates what is required by your\r\n * application code to initialize, execute, and terminate the generated code.\r\n * Attaching rt_OneStep to a real-time clock is target specific. This example\r\n * illustrates how you do this relative to initializing the model.\r\n */\r\nint_T main(int_T argc, const char *argv[])\r\n{\r\n  /* Unused arguments */\r\n  (void)(argc);\r\n  (void)(argv);\r\n\r\n  /* Initialize model */\r\n  pitch_pid_initialize();\r\n\r\n  /* Attach rt_OneStep to a timer or interrupt service routine with\r\n   * period 0.01 seconds (base rate of the model) here.\r\n   * The call syntax for rt_OneStep is\r\n   *\r\n   *  rt_OneStep();\r\n   */\r\n  printf(\"Warning: The simulation will run forever. \"\r\n         \"Generated ERT main won't simulate model step behavior. \"\r\n         \"To change this behavior select the 'MAT-file logging' option.\\n\");\r\n  fflush((NULL));\r\n  while (rtmGetErrorStatus(pitch_pid_M) == (NULL)) {\r\n    /*  Perform application tasks here */\r\n  }\r\n\r\n  /* Terminate model */\r\n  pitch_pid_terminate();\r\n  return 0;\r\n}\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"pitch_pid.c","type":"source","group":"model","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\pitch_pid_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: pitch_pid.c\r\n *\r\n * Code generated for Simulink model 'pitch_pid'.\r\n *\r\n * Model version                  : 1.57\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Tue Apr 23 06:48:21 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#include \"pitch_pid.h\"\r\n#include \"rtwtypes.h\"\r\n\r\n/* Block states (default storage) */\r\nDW_pitch_pid_T pitch_pid_DW;\r\n\r\n/* External inputs (root inport signals with default storage) */\r\nExtU_pitch_pid_T pitch_pid_U;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\nExtY_pitch_pid_T pitch_pid_Y;\r\n\r\n/* Real-time model */\r\nstatic RT_MODEL_pitch_pid_T pitch_pid_M_;\r\nRT_MODEL_pitch_pid_T *const pitch_pid_M = &pitch_pid_M_;\r\n\r\n/* Model step function */\r\nvoid pitch_pid_step(void)\r\n{\r\n  real_T rtb_FilterCoefficient;\r\n\r\n  /* Gain: '<S36>/Filter Coefficient' incorporates:\r\n   *  DiscreteIntegrator: '<S28>/Filter'\r\n   *  Gain: '<S27>/Derivative Gain'\r\n   *  Inport: '<Root>/u'\r\n   *  Sum: '<S28>/SumD'\r\n   */\r\n  rtb_FilterCoefficient = (0.374013778671778 * pitch_pid_U.u -\r\n    pitch_pid_DW.Filter_DSTATE) * 34.6864643900812;\r\n\r\n  /* Outport: '<Root>/y' incorporates:\r\n   *  DiscreteIntegrator: '<S33>/Integrator'\r\n   *  Gain: '<S38>/Proportional Gain'\r\n   *  Inport: '<Root>/u'\r\n   *  Sum: '<S42>/Sum'\r\n   */\r\n  pitch_pid_Y.y = (3.78093624757694 * pitch_pid_U.u +\r\n                   pitch_pid_DW.Integrator_DSTATE) + rtb_FilterCoefficient;\r\n\r\n  /* Update for DiscreteIntegrator: '<S33>/Integrator' incorporates:\r\n   *  Gain: '<S30>/Integral Gain'\r\n   *  Inport: '<Root>/u'\r\n   */\r\n  pitch_pid_DW.Integrator_DSTATE += 2.55915063913408 * pitch_pid_U.u * 0.01;\r\n\r\n  /* Update for DiscreteIntegrator: '<S28>/Filter' */\r\n  pitch_pid_DW.Filter_DSTATE += 0.01 * rtb_FilterCoefficient;\r\n}\r\n\r\n/* Model initialize function */\r\nvoid pitch_pid_initialize(void)\r\n{\r\n  /* (no initialization code required) */\r\n}\r\n\r\n/* Model terminate function */\r\nvoid pitch_pid_terminate(void)\r\n{\r\n  /* (no terminate code required) */\r\n}\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"pitch_pid.h","type":"header","group":"model","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\pitch_pid_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: pitch_pid.h\r\n *\r\n * Code generated for Simulink model 'pitch_pid'.\r\n *\r\n * Model version                  : 1.57\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Tue Apr 23 06:48:21 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_pitch_pid_h_\r\n#define RTW_HEADER_pitch_pid_h_\r\n#ifndef pitch_pid_COMMON_INCLUDES_\r\n#define pitch_pid_COMMON_INCLUDES_\r\n#include \"rtwtypes.h\"\r\n#endif                                 /* pitch_pid_COMMON_INCLUDES_ */\r\n\r\n#include \"pitch_pid_types.h\"\r\n\r\n/* Macros for accessing real-time model data structure */\r\n#ifndef rtmGetErrorStatus\r\n#define rtmGetErrorStatus(rtm)         ((rtm)->errorStatus)\r\n#endif\r\n\r\n#ifndef rtmSetErrorStatus\r\n#define rtmSetErrorStatus(rtm, val)    ((rtm)->errorStatus = (val))\r\n#endif\r\n\r\n/* Block states (default storage) for system '<Root>' */\r\ntypedef struct {\r\n  real_T Integrator_DSTATE;            /* '<S33>/Integrator' */\r\n  real_T Filter_DSTATE;                /* '<S28>/Filter' */\r\n} DW_pitch_pid_T;\r\n\r\n/* External inputs (root inport signals with default storage) */\r\ntypedef struct {\r\n  real_T u;                            /* '<Root>/u' */\r\n} ExtU_pitch_pid_T;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\ntypedef struct {\r\n  real_T y;                            /* '<Root>/y' */\r\n} ExtY_pitch_pid_T;\r\n\r\n/* Real-time Model Data Structure */\r\nstruct tag_RTM_pitch_pid_T {\r\n  const char_T * volatile errorStatus;\r\n};\r\n\r\n/* Block states (default storage) */\r\nextern DW_pitch_pid_T pitch_pid_DW;\r\n\r\n/* External inputs (root inport signals with default storage) */\r\nextern ExtU_pitch_pid_T pitch_pid_U;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\nextern ExtY_pitch_pid_T pitch_pid_Y;\r\n\r\n/* Model entry point functions */\r\nextern void pitch_pid_initialize(void);\r\nextern void pitch_pid_step(void);\r\nextern void pitch_pid_terminate(void);\r\n\r\n/* Real-time Model object */\r\nextern RT_MODEL_pitch_pid_T *const pitch_pid_M;\r\n\r\n/*-\r\n * The generated code includes comments that allow you to trace directly\r\n * back to the appropriate location in the model.  The basic format\r\n * is <system>/block_name, where system is the system number (uniquely\r\n * assigned by Simulink) and block_name is the name of the block.\r\n *\r\n * Note that this particular code originates from a subsystem build,\r\n * and has its own system numbers different from the parent model.\r\n * Refer to the system hierarchy for this subsystem below, and use the\r\n * MATLAB hilite_system command to trace the generated code back\r\n * to the parent model.  For example,\r\n *\r\n * hilite_system('drone_controller_gazebo/pitch_pid')    - opens subsystem drone_controller_gazebo/pitch_pid\r\n * hilite_system('drone_controller_gazebo/pitch_pid/Kp') - opens and selects block Kp\r\n *\r\n * Here is the system hierarchy for this model\r\n *\r\n * '<Root>' : 'drone_controller_gazebo'\r\n * '<S1>'   : 'drone_controller_gazebo/pitch_pid'\r\n * '<S2>'   : 'drone_controller_gazebo/pitch_pid/Anti-windup'\r\n * '<S3>'   : 'drone_controller_gazebo/pitch_pid/D Gain'\r\n * '<S4>'   : 'drone_controller_gazebo/pitch_pid/Filter'\r\n * '<S5>'   : 'drone_controller_gazebo/pitch_pid/Filter ICs'\r\n * '<S6>'   : 'drone_controller_gazebo/pitch_pid/I Gain'\r\n * '<S7>'   : 'drone_controller_gazebo/pitch_pid/Ideal P Gain'\r\n * '<S8>'   : 'drone_controller_gazebo/pitch_pid/Ideal P Gain Fdbk'\r\n * '<S9>'   : 'drone_controller_gazebo/pitch_pid/Integrator'\r\n * '<S10>'  : 'drone_controller_gazebo/pitch_pid/Integrator ICs'\r\n * '<S11>'  : 'drone_controller_gazebo/pitch_pid/N Copy'\r\n * '<S12>'  : 'drone_controller_gazebo/pitch_pid/N Gain'\r\n * '<S13>'  : 'drone_controller_gazebo/pitch_pid/P Copy'\r\n * '<S14>'  : 'drone_controller_gazebo/pitch_pid/Parallel P Gain'\r\n * '<S15>'  : 'drone_controller_gazebo/pitch_pid/Reset Signal'\r\n * '<S16>'  : 'drone_controller_gazebo/pitch_pid/Saturation'\r\n * '<S17>'  : 'drone_controller_gazebo/pitch_pid/Saturation Fdbk'\r\n * '<S18>'  : 'drone_controller_gazebo/pitch_pid/Sum'\r\n * '<S19>'  : 'drone_controller_gazebo/pitch_pid/Sum Fdbk'\r\n * '<S20>'  : 'drone_controller_gazebo/pitch_pid/Tracking Mode'\r\n * '<S21>'  : 'drone_controller_gazebo/pitch_pid/Tracking Mode Sum'\r\n * '<S22>'  : 'drone_controller_gazebo/pitch_pid/Tsamp - Integral'\r\n * '<S23>'  : 'drone_controller_gazebo/pitch_pid/Tsamp - Ngain'\r\n * '<S24>'  : 'drone_controller_gazebo/pitch_pid/postSat Signal'\r\n * '<S25>'  : 'drone_controller_gazebo/pitch_pid/preSat Signal'\r\n * '<S26>'  : 'drone_controller_gazebo/pitch_pid/Anti-windup/Passthrough'\r\n * '<S27>'  : 'drone_controller_gazebo/pitch_pid/D Gain/Internal Parameters'\r\n * '<S28>'  : 'drone_controller_gazebo/pitch_pid/Filter/Disc. Forward Euler Filter'\r\n * '<S29>'  : 'drone_controller_gazebo/pitch_pid/Filter ICs/Internal IC - Filter'\r\n * '<S30>'  : 'drone_controller_gazebo/pitch_pid/I Gain/Internal Parameters'\r\n * '<S31>'  : 'drone_controller_gazebo/pitch_pid/Ideal P Gain/Passthrough'\r\n * '<S32>'  : 'drone_controller_gazebo/pitch_pid/Ideal P Gain Fdbk/Disabled'\r\n * '<S33>'  : 'drone_controller_gazebo/pitch_pid/Integrator/Discrete'\r\n * '<S34>'  : 'drone_controller_gazebo/pitch_pid/Integrator ICs/Internal IC'\r\n * '<S35>'  : 'drone_controller_gazebo/pitch_pid/N Copy/Disabled'\r\n * '<S36>'  : 'drone_controller_gazebo/pitch_pid/N Gain/Internal Parameters'\r\n * '<S37>'  : 'drone_controller_gazebo/pitch_pid/P Copy/Disabled'\r\n * '<S38>'  : 'drone_controller_gazebo/pitch_pid/Parallel P Gain/Internal Parameters'\r\n * '<S39>'  : 'drone_controller_gazebo/pitch_pid/Reset Signal/Disabled'\r\n * '<S40>'  : 'drone_controller_gazebo/pitch_pid/Saturation/Passthrough'\r\n * '<S41>'  : 'drone_controller_gazebo/pitch_pid/Saturation Fdbk/Disabled'\r\n * '<S42>'  : 'drone_controller_gazebo/pitch_pid/Sum/Sum_PID'\r\n * '<S43>'  : 'drone_controller_gazebo/pitch_pid/Sum Fdbk/Disabled'\r\n * '<S44>'  : 'drone_controller_gazebo/pitch_pid/Tracking Mode/Disabled'\r\n * '<S45>'  : 'drone_controller_gazebo/pitch_pid/Tracking Mode Sum/Passthrough'\r\n * '<S46>'  : 'drone_controller_gazebo/pitch_pid/Tsamp - Integral/Passthrough'\r\n * '<S47>'  : 'drone_controller_gazebo/pitch_pid/Tsamp - Ngain/Passthrough'\r\n * '<S48>'  : 'drone_controller_gazebo/pitch_pid/postSat Signal/Forward_Path'\r\n * '<S49>'  : 'drone_controller_gazebo/pitch_pid/preSat Signal/Forward_Path'\r\n */\r\n#endif                                 /* RTW_HEADER_pitch_pid_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"pitch_pid_private.h","type":"header","group":"model","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\pitch_pid_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: pitch_pid_private.h\r\n *\r\n * Code generated for Simulink model 'pitch_pid'.\r\n *\r\n * Model version                  : 1.57\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Tue Apr 23 06:48:21 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_pitch_pid_private_h_\r\n#define RTW_HEADER_pitch_pid_private_h_\r\n#include \"rtwtypes.h\"\r\n#include \"pitch_pid_types.h\"\r\n#endif                                 /* RTW_HEADER_pitch_pid_private_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"pitch_pid_types.h","type":"header","group":"model","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\pitch_pid_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: pitch_pid_types.h\r\n *\r\n * Code generated for Simulink model 'pitch_pid'.\r\n *\r\n * Model version                  : 1.57\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Tue Apr 23 06:48:21 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_pitch_pid_types_h_\r\n#define RTW_HEADER_pitch_pid_types_h_\r\n\r\n/* Forward declaration for rtModel */\r\ntypedef struct tag_RTM_pitch_pid_T RT_MODEL_pitch_pid_T;\r\n\r\n#endif                                 /* RTW_HEADER_pitch_pid_types_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"rtwtypes.h","type":"header","group":"utility","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\pitch_pid_ert_rtw","tag":"","groupDisplay":"Utility files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: rtwtypes.h\r\n *\r\n * Code generated for Simulink model 'pitch_pid'.\r\n *\r\n * Model version                  : 1.57\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Tue Apr 23 06:48:21 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTWTYPES_H\r\n#define RTWTYPES_H\r\n\r\n/* Logical type definitions */\r\n#if (!defined(__cplusplus))\r\n#ifndef false\r\n#define false                          (0U)\r\n#endif\r\n\r\n#ifndef true\r\n#define true                           (1U)\r\n#endif\r\n#endif\r\n\r\n/*=======================================================================*\r\n * Target hardware information\r\n *   Device type: MATLAB Host\r\n *   Number of bits:     char:   8    short:   16    int:  32\r\n *                       long:  32    long long:  64\r\n *                       native word size:  64\r\n *   Byte ordering: LittleEndian\r\n *   Signed integer division rounds to: Zero\r\n *   Shift right on a signed integer as arithmetic shift: on\r\n *=======================================================================*/\r\n\r\n/*=======================================================================*\r\n * Fixed width word size data types:                                     *\r\n *   int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\r\n *   uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\r\n *   real32_T, real64_T           - 32 and 64 bit floating point numbers *\r\n *=======================================================================*/\r\ntypedef signed char int8_T;\r\ntypedef unsigned char uint8_T;\r\ntypedef short int16_T;\r\ntypedef unsigned short uint16_T;\r\ntypedef int int32_T;\r\ntypedef unsigned int uint32_T;\r\ntypedef long long int64_T;\r\ntypedef unsigned long long uint64_T;\r\ntypedef float real32_T;\r\ntypedef double real64_T;\r\n\r\n/*===========================================================================*\r\n * Generic type definitions: boolean_T, char_T, byte_T, int_T, uint_T,       *\r\n *                           real_T, time_T, ulong_T, ulonglong_T.           *\r\n *===========================================================================*/\r\ntypedef double real_T;\r\ntypedef double time_T;\r\ntypedef unsigned char boolean_T;\r\ntypedef int int_T;\r\ntypedef unsigned int uint_T;\r\ntypedef unsigned long ulong_T;\r\ntypedef unsigned long long ulonglong_T;\r\ntypedef char char_T;\r\ntypedef unsigned char uchar_T;\r\ntypedef char_T byte_T;\r\n\r\n/*===========================================================================*\r\n * Complex number type definitions                                           *\r\n *===========================================================================*/\r\n#define CREAL_T\r\n\r\ntypedef struct {\r\n  real32_T re;\r\n  real32_T im;\r\n} creal32_T;\r\n\r\ntypedef struct {\r\n  real64_T re;\r\n  real64_T im;\r\n} creal64_T;\r\n\r\ntypedef struct {\r\n  real_T re;\r\n  real_T im;\r\n} creal_T;\r\n\r\n#define CINT8_T\r\n\r\ntypedef struct {\r\n  int8_T re;\r\n  int8_T im;\r\n} cint8_T;\r\n\r\n#define CUINT8_T\r\n\r\ntypedef struct {\r\n  uint8_T re;\r\n  uint8_T im;\r\n} cuint8_T;\r\n\r\n#define CINT16_T\r\n\r\ntypedef struct {\r\n  int16_T re;\r\n  int16_T im;\r\n} cint16_T;\r\n\r\n#define CUINT16_T\r\n\r\ntypedef struct {\r\n  uint16_T re;\r\n  uint16_T im;\r\n} cuint16_T;\r\n\r\n#define CINT32_T\r\n\r\ntypedef struct {\r\n  int32_T re;\r\n  int32_T im;\r\n} cint32_T;\r\n\r\n#define CUINT32_T\r\n\r\ntypedef struct {\r\n  uint32_T re;\r\n  uint32_T im;\r\n} cuint32_T;\r\n\r\n#define CINT64_T\r\n\r\ntypedef struct {\r\n  int64_T re;\r\n  int64_T im;\r\n} cint64_T;\r\n\r\n#define CUINT64_T\r\n\r\ntypedef struct {\r\n  uint64_T re;\r\n  uint64_T im;\r\n} cuint64_T;\r\n\r\n/*=======================================================================*\r\n * Min and Max:                                                          *\r\n *   int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\r\n *   uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\r\n *=======================================================================*/\r\n#define MAX_int8_T                     ((int8_T)(127))\r\n#define MIN_int8_T                     ((int8_T)(-128))\r\n#define MAX_uint8_T                    ((uint8_T)(255U))\r\n#define MAX_int16_T                    ((int16_T)(32767))\r\n#define MIN_int16_T                    ((int16_T)(-32768))\r\n#define MAX_uint16_T                   ((uint16_T)(65535U))\r\n#define MAX_int32_T                    ((int32_T)(2147483647))\r\n#define MIN_int32_T                    ((int32_T)(-2147483647-1))\r\n#define MAX_uint32_T                   ((uint32_T)(0xFFFFFFFFU))\r\n#define MAX_int64_T                    ((int64_T)(9223372036854775807LL))\r\n#define MIN_int64_T                    ((int64_T)(-9223372036854775807LL-1LL))\r\n#define MAX_uint64_T                   ((uint64_T)(0xFFFFFFFFFFFFFFFFULL))\r\n\r\n/* Block D-Work pointer type */\r\ntypedef void * pointer_T;\r\n\r\n#endif                                 /* RTWTYPES_H */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"}],"features":{"annotation":false,"coverage":true,"profiling":true,"tooltip":true,"coverageTooltip":false,"showJustificationLinks":false,"showProfilingInfo":false,"showTaskSummary":false}};