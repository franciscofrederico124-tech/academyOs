#include <Arduino.h>
#include <SPI.h>
#include <WiFi.h>
#include "./hooks/globals.h"
#include "./services/read_card.h"
#include "./services/connect_to_wifi.h"

void setup()
{
    Serial.begin(115200);

    SPI.begin();
    rfid.PCD_Init();

    display.init();
    display.backlight();
    display.clear();

    connect_to_wifi();

    Serial.println(" Aproxima as card: ");
}

void loop()
{
    if (!WiFi.status() != WL_CONNECTED)
    {
        Serial.println("| > Descontectado | Reconectando...");
        display.clear();
        display.setCursor(0, 0);
        display.print("= Reconectando! =");
    }
    delay(400);
}
