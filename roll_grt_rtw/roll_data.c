/*
 * roll_data.c
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

/* Block parameters (default storage) */
P_roll_T roll_P = {
  /* Mask Parameter: roll_rate_Controller_I
   * Referenced by: '<S30>/Integral Gain'
   */
  0.174993072998953,

  /* Mask Parameter: roll_rate_Controller_InitialCon
   * Referenced by: '<S33>/Integrator'
   */
  0.0,

  /* Mask Parameter: roll_rate_Controller_P
   * Referenced by: '<S31>/Proportional Gain'
   */
  0.0752024069168458,

  /* Computed Parameter: Integrator_gainval
   * Referenced by: '<S33>/Integrator'
   */
  0.002
};
