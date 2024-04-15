radius_rotor = 0.1; % meters
x = radius_rotor; % meters
y = 0.015; % meters
z = 0.003; % meters

mass_rotor = 0.009; % kg
rotor_velocity_slowdown_sim = 10;
mass = mass_rotor * rotor_velocity_slowdown_sim;

ixx = 0.0833333 * mass * (y^2) * (y^2);
iyy = 0.0833333 * mass * (x^2) * (z^2);
izz = 0.0833333 * mass * (x^2) * (y^2);

 [ixx iyy izz]

% 1.0e-07 * [0.0038    0.0067    0.1687]