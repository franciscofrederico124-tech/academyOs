#pragma once

#include <Arduino.h>

struct Actor
{
    int pin;

    Actor(int pin_el) : pin(pin_el)
    {
        pinMode(pin, OUTPUT);
    }

    void high()
    {
        digitalWrite(pin, HIGH);
    }

    void low()
    {
        digitalWrite(pin, LOW);
    }

    void analog(int value)
    {
        analogWrite(pin, value);
    }

    void digital(int value)
    {
        digitalWrite(pin, value);
    }
};
