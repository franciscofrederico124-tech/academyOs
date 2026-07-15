#pragma once
#include <Arduino.h>
#include <WiFi.h>
#include "../hooks/globals.h"

void read_card()
{
    if (!WiFi.status() != WL_CONNECTED)
    {
        Serial.println("| > Descontectado | Reconectando...");
        display.clear();
        display.setCursor(0, 0);
        display.print(" > Reconectando!");
    }

    if (!rfid.PICC_IsNewCardPresent())
    {
        return;
    }

    if (!rfid.PICC_ReadCardSerial())
    {
        return;
    }

    String uid = "";

    for (byte i = 0; i < rfid.uid.size; i++)
    {
        if (rfid.uid.uidByte[i] < 0x10)
        {
            uid += "0";
        }
        uid += String(rfid.uid.uidByte[i], HEX);
        if (i < rfid.uid.size - 1)
        {
            uid += " ";
        }
    }

    uid.trim();
    uid.toUpperCase();

    Serial.print("UID: ");
    Serial.println(uid);


    rfid.PICC_HaltA();
    // rfid.PCD_StopCryptoA();
}
