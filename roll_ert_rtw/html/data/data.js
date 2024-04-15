var dataJson = {"arch":{"ispc":true,"isunix":false,"ismac":false},"build":"drone_controller_gazebo/roll _rate_Controller","ref":false,"files":[{"name":"ert_main.c","type":"source","group":"main","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\roll_ert_rtw","tag":"","groupDisplay":"Main file","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: ert_main.c\r\n *\r\n * Code generated for Simulink model 'roll'.\r\n *\r\n * Model version                  : 1.33\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Mon Apr 15 09:43:00 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#include <stddef.h>\r\n#include <stdio.h>            /* This example main program uses printf/fflush */\r\n#include \"roll.h\"                      /* Model header file */\r\n\r\n/*\r\n * Associating rt_OneStep with a real-time clock or interrupt service routine\r\n * is what makes the generated code \"real-time\".  The function rt_OneStep is\r\n * always associated with the base rate of the model.  Subrates are managed\r\n * by the base rate from inside the generated code.  Enabling/disabling\r\n * interrupts and floating point context switches are target specific.  This\r\n * example code indicates where these should take place relative to executing\r\n * the generated code step function.  Overrun behavior should be tailored to\r\n * your application needs.  This example simply sets an error status in the\r\n * real-time model and returns from rt_OneStep.\r\n */\r\nvoid rt_OneStep(void);\r\nvoid rt_OneStep(void)\r\n{\r\n  static boolean_T OverrunFlag = false;\r\n\r\n  /* Disable interrupts here */\r\n\r\n  /* Check for overrun */\r\n  if (OverrunFlag) {\r\n    rtmSetErrorStatus(roll_M, \"Overrun\");\r\n    return;\r\n  }\r\n\r\n  OverrunFlag = true;\r\n\r\n  /* Save FPU context here (if necessary) */\r\n  /* Re-enable timer or interrupt here */\r\n  /* Set model inputs here */\r\n\r\n  /* Step the model */\r\n  roll_step();\r\n\r\n  /* Get model outputs here */\r\n\r\n  /* Indicate task complete */\r\n  OverrunFlag = false;\r\n\r\n  /* Disable interrupts here */\r\n  /* Restore FPU context here (if necessary) */\r\n  /* Enable interrupts here */\r\n}\r\n\r\n/*\r\n * The example main function illustrates what is required by your\r\n * application code to initialize, execute, and terminate the generated code.\r\n * Attaching rt_OneStep to a real-time clock is target specific. This example\r\n * illustrates how you do this relative to initializing the model.\r\n */\r\nint_T main(int_T argc, const char *argv[])\r\n{\r\n  /* Unused arguments */\r\n  (void)(argc);\r\n  (void)(argv);\r\n\r\n  /* Initialize model */\r\n  roll_initialize();\r\n\r\n  /* Attach rt_OneStep to a timer or interrupt service routine with\r\n   * period 0.002 seconds (base rate of the model) here.\r\n   * The call syntax for rt_OneStep is\r\n   *\r\n   *  rt_OneStep();\r\n   */\r\n  printf(\"Warning: The simulation will run forever. \"\r\n         \"Generated ERT main won't simulate model step behavior. \"\r\n         \"To change this behavior select the 'MAT-file logging' option.\\n\");\r\n  fflush((NULL));\r\n  while (rtmGetErrorStatus(roll_M) == (NULL)) {\r\n    /*  Perform application tasks here */\r\n  }\r\n\r\n  /* Terminate model */\r\n  roll_terminate();\r\n  return 0;\r\n}\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"roll.c","type":"source","group":"model","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\roll_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: roll.c\r\n *\r\n * Code generated for Simulink model 'roll'.\r\n *\r\n * Model version                  : 1.33\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Mon Apr 15 09:43:00 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#include \"roll.h\"\r\n\r\n/* Block states (default storage) */\r\nDW_roll_T roll_DW;\r\n\r\n/* External inputs (root inport signals with default storage) */\r\nExtU_roll_T roll_U;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\nExtY_roll_T roll_Y;\r\n\r\n/* Real-time model */\r\nstatic RT_MODEL_roll_T roll_M_;\r\nRT_MODEL_roll_T *const roll_M = &roll_M_;\r\n\r\n/* Model step function */\r\nvoid roll_step(void)\r\n{\r\n  /* Outport: '<Root>/y' incorporates:\r\n   *  DiscreteIntegrator: '<S33>/Integrator'\r\n   *  Gain: '<S31>/Proportional Gain'\r\n   *  Inport: '<Root>/u'\r\n   *  Sum: '<S42>/Sum'\r\n   */\r\n  roll_Y.y = (roll_U.u + roll_DW.Integrator_DSTATE) * 0.0752024069168458;\r\n\r\n  /* Update for DiscreteIntegrator: '<S33>/Integrator' incorporates:\r\n   *  Gain: '<S30>/Integral Gain'\r\n   *  Inport: '<Root>/u'\r\n   */\r\n  roll_DW.Integrator_DSTATE += 0.174993072998953 * roll_U.u * 0.002;\r\n}\r\n\r\n/* Model initialize function */\r\nvoid roll_initialize(void)\r\n{\r\n  /* (no initialization code required) */\r\n}\r\n\r\n/* Model terminate function */\r\nvoid roll_terminate(void)\r\n{\r\n  /* (no terminate code required) */\r\n}\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"roll.h","type":"header","group":"model","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\roll_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: roll.h\r\n *\r\n * Code generated for Simulink model 'roll'.\r\n *\r\n * Model version                  : 1.33\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Mon Apr 15 09:43:00 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_roll_h_\r\n#define RTW_HEADER_roll_h_\r\n#ifndef roll_COMMON_INCLUDES_\r\n#define roll_COMMON_INCLUDES_\r\n#include \"rtwtypes.h\"\r\n#endif                                 /* roll_COMMON_INCLUDES_ */\r\n\r\n#include \"roll_types.h\"\r\n\r\n/* Macros for accessing real-time model data structure */\r\n#ifndef rtmGetErrorStatus\r\n#define rtmGetErrorStatus(rtm)         ((rtm)->errorStatus)\r\n#endif\r\n\r\n#ifndef rtmSetErrorStatus\r\n#define rtmSetErrorStatus(rtm, val)    ((rtm)->errorStatus = (val))\r\n#endif\r\n\r\n/* Block states (default storage) for system '<Root>' */\r\ntypedef struct {\r\n  real_T Integrator_DSTATE;            /* '<S33>/Integrator' */\r\n} DW_roll_T;\r\n\r\n/* External inputs (root inport signals with default storage) */\r\ntypedef struct {\r\n  real_T u;                            /* '<Root>/u' */\r\n} ExtU_roll_T;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\ntypedef struct {\r\n  real_T y;                            /* '<Root>/y' */\r\n} ExtY_roll_T;\r\n\r\n/* Real-time Model Data Structure */\r\nstruct tag_RTM_roll_T {\r\n  const char_T * volatile errorStatus;\r\n};\r\n\r\n/* Block states (default storage) */\r\nextern DW_roll_T roll_DW;\r\n\r\n/* External inputs (root inport signals with default storage) */\r\nextern ExtU_roll_T roll_U;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\nextern ExtY_roll_T roll_Y;\r\n\r\n/* Model entry point functions */\r\nextern void roll_initialize(void);\r\nextern void roll_step(void);\r\nextern void roll_terminate(void);\r\n\r\n/* Real-time Model object */\r\nextern RT_MODEL_roll_T *const roll_M;\r\n\r\n/*-\r\n * The generated code includes comments that allow you to trace directly\r\n * back to the appropriate location in the model.  The basic format\r\n * is <system>/block_name, where system is the system number (uniquely\r\n * assigned by Simulink) and block_name is the name of the block.\r\n *\r\n * Note that this particular code originates from a subsystem build,\r\n * and has its own system numbers different from the parent model.\r\n * Refer to the system hierarchy for this subsystem below, and use the\r\n * MATLAB hilite_system command to trace the generated code back\r\n * to the parent model.  For example,\r\n *\r\n * hilite_system('drone_controller_gazebo/roll _rate_Controller')    - opens subsystem drone_controller_gazebo/roll _rate_Controller\r\n * hilite_system('drone_controller_gazebo/roll _rate_Controller/Kp') - opens and selects block Kp\r\n *\r\n * Here is the system hierarchy for this model\r\n *\r\n * '<Root>' : 'drone_controller_gazebo'\r\n * '<S1>'   : 'drone_controller_gazebo/roll _rate_Controller'\r\n * '<S2>'   : 'drone_controller_gazebo/roll _rate_Controller/Anti-windup'\r\n * '<S3>'   : 'drone_controller_gazebo/roll _rate_Controller/D Gain'\r\n * '<S4>'   : 'drone_controller_gazebo/roll _rate_Controller/Filter'\r\n * '<S5>'   : 'drone_controller_gazebo/roll _rate_Controller/Filter ICs'\r\n * '<S6>'   : 'drone_controller_gazebo/roll _rate_Controller/I Gain'\r\n * '<S7>'   : 'drone_controller_gazebo/roll _rate_Controller/Ideal P Gain'\r\n * '<S8>'   : 'drone_controller_gazebo/roll _rate_Controller/Ideal P Gain Fdbk'\r\n * '<S9>'   : 'drone_controller_gazebo/roll _rate_Controller/Integrator'\r\n * '<S10>'  : 'drone_controller_gazebo/roll _rate_Controller/Integrator ICs'\r\n * '<S11>'  : 'drone_controller_gazebo/roll _rate_Controller/N Copy'\r\n * '<S12>'  : 'drone_controller_gazebo/roll _rate_Controller/N Gain'\r\n * '<S13>'  : 'drone_controller_gazebo/roll _rate_Controller/P Copy'\r\n * '<S14>'  : 'drone_controller_gazebo/roll _rate_Controller/Parallel P Gain'\r\n * '<S15>'  : 'drone_controller_gazebo/roll _rate_Controller/Reset Signal'\r\n * '<S16>'  : 'drone_controller_gazebo/roll _rate_Controller/Saturation'\r\n * '<S17>'  : 'drone_controller_gazebo/roll _rate_Controller/Saturation Fdbk'\r\n * '<S18>'  : 'drone_controller_gazebo/roll _rate_Controller/Sum'\r\n * '<S19>'  : 'drone_controller_gazebo/roll _rate_Controller/Sum Fdbk'\r\n * '<S20>'  : 'drone_controller_gazebo/roll _rate_Controller/Tracking Mode'\r\n * '<S21>'  : 'drone_controller_gazebo/roll _rate_Controller/Tracking Mode Sum'\r\n * '<S22>'  : 'drone_controller_gazebo/roll _rate_Controller/Tsamp - Integral'\r\n * '<S23>'  : 'drone_controller_gazebo/roll _rate_Controller/Tsamp - Ngain'\r\n * '<S24>'  : 'drone_controller_gazebo/roll _rate_Controller/postSat Signal'\r\n * '<S25>'  : 'drone_controller_gazebo/roll _rate_Controller/preSat Signal'\r\n * '<S26>'  : 'drone_controller_gazebo/roll _rate_Controller/Anti-windup/Passthrough'\r\n * '<S27>'  : 'drone_controller_gazebo/roll _rate_Controller/D Gain/Disabled'\r\n * '<S28>'  : 'drone_controller_gazebo/roll _rate_Controller/Filter/Disabled'\r\n * '<S29>'  : 'drone_controller_gazebo/roll _rate_Controller/Filter ICs/Disabled'\r\n * '<S30>'  : 'drone_controller_gazebo/roll _rate_Controller/I Gain/Internal Parameters'\r\n * '<S31>'  : 'drone_controller_gazebo/roll _rate_Controller/Ideal P Gain/Internal Parameters'\r\n * '<S32>'  : 'drone_controller_gazebo/roll _rate_Controller/Ideal P Gain Fdbk/Disabled'\r\n * '<S33>'  : 'drone_controller_gazebo/roll _rate_Controller/Integrator/Discrete'\r\n * '<S34>'  : 'drone_controller_gazebo/roll _rate_Controller/Integrator ICs/Internal IC'\r\n * '<S35>'  : 'drone_controller_gazebo/roll _rate_Controller/N Copy/Disabled wSignal Specification'\r\n * '<S36>'  : 'drone_controller_gazebo/roll _rate_Controller/N Gain/Disabled'\r\n * '<S37>'  : 'drone_controller_gazebo/roll _rate_Controller/P Copy/Disabled'\r\n * '<S38>'  : 'drone_controller_gazebo/roll _rate_Controller/Parallel P Gain/Passthrough'\r\n * '<S39>'  : 'drone_controller_gazebo/roll _rate_Controller/Reset Signal/Disabled'\r\n * '<S40>'  : 'drone_controller_gazebo/roll _rate_Controller/Saturation/Passthrough'\r\n * '<S41>'  : 'drone_controller_gazebo/roll _rate_Controller/Saturation Fdbk/Disabled'\r\n * '<S42>'  : 'drone_controller_gazebo/roll _rate_Controller/Sum/Sum_PI'\r\n * '<S43>'  : 'drone_controller_gazebo/roll _rate_Controller/Sum Fdbk/Disabled'\r\n * '<S44>'  : 'drone_controller_gazebo/roll _rate_Controller/Tracking Mode/Disabled'\r\n * '<S45>'  : 'drone_controller_gazebo/roll _rate_Controller/Tracking Mode Sum/Passthrough'\r\n * '<S46>'  : 'drone_controller_gazebo/roll _rate_Controller/Tsamp - Integral/Passthrough'\r\n * '<S47>'  : 'drone_controller_gazebo/roll _rate_Controller/Tsamp - Ngain/Passthrough'\r\n * '<S48>'  : 'drone_controller_gazebo/roll _rate_Controller/postSat Signal/Forward_Path'\r\n * '<S49>'  : 'drone_controller_gazebo/roll _rate_Controller/preSat Signal/Forward_Path'\r\n */\r\n#endif                                 /* RTW_HEADER_roll_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"roll_private.h","type":"header","group":"model","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\roll_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: roll_private.h\r\n *\r\n * Code generated for Simulink model 'roll'.\r\n *\r\n * Model version                  : 1.33\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Mon Apr 15 09:43:00 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_roll_private_h_\r\n#define RTW_HEADER_roll_private_h_\r\n#include \"rtwtypes.h\"\r\n#include \"roll_types.h\"\r\n#endif                                 /* RTW_HEADER_roll_private_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"roll_types.h","type":"header","group":"model","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\roll_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: roll_types.h\r\n *\r\n * Code generated for Simulink model 'roll'.\r\n *\r\n * Model version                  : 1.33\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Mon Apr 15 09:43:00 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_roll_types_h_\r\n#define RTW_HEADER_roll_types_h_\r\n\r\n/* Forward declaration for rtModel */\r\ntypedef struct tag_RTM_roll_T RT_MODEL_roll_T;\r\n\r\n#endif                                 /* RTW_HEADER_roll_types_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"rtwtypes.h","type":"header","group":"utility","path":"C:\\Users\\deepe\\OneDrive\\Documents\\Motor_modelling\\roll_ert_rtw","tag":"","groupDisplay":"Utility files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: rtwtypes.h\r\n *\r\n * Code generated for Simulink model 'roll'.\r\n *\r\n * Model version                  : 1.33\r\n * Simulink Coder version         : 9.8 (R2022b) 13-May-2022\r\n * C/C++ source code generated on : Mon Apr 15 09:43:00 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTWTYPES_H\r\n#define RTWTYPES_H\r\n\r\n/* Logical type definitions */\r\n#if (!defined(__cplusplus))\r\n#ifndef false\r\n#define false                          (0U)\r\n#endif\r\n\r\n#ifndef true\r\n#define true                           (1U)\r\n#endif\r\n#endif\r\n\r\n/*=======================================================================*\r\n * Target hardware information\r\n *   Device type: MATLAB Host\r\n *   Number of bits:     char:   8    short:   16    int:  32\r\n *                       long:  32    long long:  64\r\n *                       native word size:  64\r\n *   Byte ordering: LittleEndian\r\n *   Signed integer division rounds to: Zero\r\n *   Shift right on a signed integer as arithmetic shift: on\r\n *=======================================================================*/\r\n\r\n/*=======================================================================*\r\n * Fixed width word size data types:                                     *\r\n *   int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\r\n *   uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\r\n *   real32_T, real64_T           - 32 and 64 bit floating point numbers *\r\n *=======================================================================*/\r\ntypedef signed char int8_T;\r\ntypedef unsigned char uint8_T;\r\ntypedef short int16_T;\r\ntypedef unsigned short uint16_T;\r\ntypedef int int32_T;\r\ntypedef unsigned int uint32_T;\r\ntypedef long long int64_T;\r\ntypedef unsigned long long uint64_T;\r\ntypedef float real32_T;\r\ntypedef double real64_T;\r\n\r\n/*===========================================================================*\r\n * Generic type definitions: boolean_T, char_T, byte_T, int_T, uint_T,       *\r\n *                           real_T, time_T, ulong_T, ulonglong_T.           *\r\n *===========================================================================*/\r\ntypedef double real_T;\r\ntypedef double time_T;\r\ntypedef unsigned char boolean_T;\r\ntypedef int int_T;\r\ntypedef unsigned int uint_T;\r\ntypedef unsigned long ulong_T;\r\ntypedef unsigned long long ulonglong_T;\r\ntypedef char char_T;\r\ntypedef unsigned char uchar_T;\r\ntypedef char_T byte_T;\r\n\r\n/*===========================================================================*\r\n * Complex number type definitions                                           *\r\n *===========================================================================*/\r\n#define CREAL_T\r\n\r\ntypedef struct {\r\n  real32_T re;\r\n  real32_T im;\r\n} creal32_T;\r\n\r\ntypedef struct {\r\n  real64_T re;\r\n  real64_T im;\r\n} creal64_T;\r\n\r\ntypedef struct {\r\n  real_T re;\r\n  real_T im;\r\n} creal_T;\r\n\r\n#define CINT8_T\r\n\r\ntypedef struct {\r\n  int8_T re;\r\n  int8_T im;\r\n} cint8_T;\r\n\r\n#define CUINT8_T\r\n\r\ntypedef struct {\r\n  uint8_T re;\r\n  uint8_T im;\r\n} cuint8_T;\r\n\r\n#define CINT16_T\r\n\r\ntypedef struct {\r\n  int16_T re;\r\n  int16_T im;\r\n} cint16_T;\r\n\r\n#define CUINT16_T\r\n\r\ntypedef struct {\r\n  uint16_T re;\r\n  uint16_T im;\r\n} cuint16_T;\r\n\r\n#define CINT32_T\r\n\r\ntypedef struct {\r\n  int32_T re;\r\n  int32_T im;\r\n} cint32_T;\r\n\r\n#define CUINT32_T\r\n\r\ntypedef struct {\r\n  uint32_T re;\r\n  uint32_T im;\r\n} cuint32_T;\r\n\r\n#define CINT64_T\r\n\r\ntypedef struct {\r\n  int64_T re;\r\n  int64_T im;\r\n} cint64_T;\r\n\r\n#define CUINT64_T\r\n\r\ntypedef struct {\r\n  uint64_T re;\r\n  uint64_T im;\r\n} cuint64_T;\r\n\r\n/*=======================================================================*\r\n * Min and Max:                                                          *\r\n *   int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\r\n *   uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\r\n *=======================================================================*/\r\n#define MAX_int8_T                     ((int8_T)(127))\r\n#define MIN_int8_T                     ((int8_T)(-128))\r\n#define MAX_uint8_T                    ((uint8_T)(255U))\r\n#define MAX_int16_T                    ((int16_T)(32767))\r\n#define MIN_int16_T                    ((int16_T)(-32768))\r\n#define MAX_uint16_T                   ((uint16_T)(65535U))\r\n#define MAX_int32_T                    ((int32_T)(2147483647))\r\n#define MIN_int32_T                    ((int32_T)(-2147483647-1))\r\n#define MAX_uint32_T                   ((uint32_T)(0xFFFFFFFFU))\r\n#define MAX_int64_T                    ((int64_T)(9223372036854775807LL))\r\n#define MIN_int64_T                    ((int64_T)(-9223372036854775807LL-1LL))\r\n#define MAX_uint64_T                   ((uint64_T)(0xFFFFFFFFFFFFFFFFULL))\r\n\r\n/* Block D-Work pointer type */\r\ntypedef void * pointer_T;\r\n\r\n#endif                                 /* RTWTYPES_H */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"}],"features":{"annotation":false,"coverage":true,"profiling":true,"tooltip":true,"coverageTooltip":false,"showJustificationLinks":false,"showProfilingInfo":false,"showTaskSummary":false}};