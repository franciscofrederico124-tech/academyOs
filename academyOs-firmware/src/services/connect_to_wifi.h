#pragma once

#include <WiFi.h>
#include <Arduino.h>

#include "../hooks/globals.h"

void connect_to_wifi()
{
    WiFi.begin(SSID, PASSWORD);
    Serial.print("| > Conectando ao wifi ");
    display.clear();
    display.setCursor(0, 0);
    display.print("== Conectando ==");
    
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(300);
    }
    display.clear();
    display.setCursor(0, 0);
    Serial.println("| > Conectado ao wifi! ");
    display.print("== Conectado ==");
}