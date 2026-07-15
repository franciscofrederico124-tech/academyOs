#pragma once

#include <Arduino.h>

struct Sensor
{
    int pin;

    Sensor(int pin_el) : pin(pin_el)
    {
        pinMode(pin, INPUT);
    }

    int read_a()
    {
        return analogRead(pin);
    }

    int read_d()
    {
        return digitalRead(pin);
    }
};
