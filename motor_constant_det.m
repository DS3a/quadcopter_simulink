pwm = thrustlog{:, 2}; % the pwm duty cycle from 1000-2000
thrust = thrustlog{:, 1}; % the thrust in kg

pwm_test = testthrustlog{:, 2}; % the pwm duty cycle from 1000-2000
thrust_test = testthrustlog{:, 1}; % the thrust in kg

%thrust_filtered = lowpass(thrust, 0.95);
thrust = thrust * 9.81;
thrust_test = thrust_test * 9.81;

%pwm = ((pwm - 1000) / 1000); % normalizing the data

[thrust2, gof] = fit(pwm, thrust, 'poly2')

%plot(thrust2, pwm, thrust_filtered);
plot(thrust2, pwm_test, thrust_test);
