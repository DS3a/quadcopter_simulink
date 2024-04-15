/*
 * pitch_rate_Controller_data.c
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

/* Block parameters (default storage) */
P_pitch_rate_Controller_T pitch_rate_Controller_P = {
  /* Mask Parameter: pitch_rate_Controller_I
   * Referenced by: '<S30>/Integral Gain'
   */
  0.0131599023132309,

  /* Mask Parameter: pitch_rate_Controller_InitialCo
   * Referenced by: '<S33>/Integrator'
   */
  0.0,

  /* Mask Parameter: pitch_rate_Controller_P
   * Referenced by: '<S38>/Proportional Gain'
   */
  0.0752024185169063,

  /* Computed Parameter: Integrator_gainval
   * Referenced by: '<S33>/Integrator'
   */
  0.002
};
