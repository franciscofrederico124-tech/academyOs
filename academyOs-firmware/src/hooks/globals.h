#pragma once
#include <Arduino.h>
#include <MFRC522.h>
#include <DHT.h>
#include <LiquidCrystal_I2C.h>

#include "./sensor.h"
#include "./actor.h"

const String SSID = "itel A100C";
const String PASSWORD = "francisco_tech_2026";

const String APIBASE = "http://127.0.0.1:3003";

#define RST 4
#define SDA 5

#define DHT_PIN 15
#define DHT_TYPE DHT11
#define MQ2_PIN 35

#define RED_LED_PIN 16
#define YELLOW_LED_PIN 17
#define GREEN_LED_PIN 2

DHT dht(DHT_PIN, DHT_TYPE);

MFRC522 rfid(SDA, RST);
LiquidCrystal_I2C display(0x27, 16, 2);

Sensor mq2(MQ2_PIN);

Actor red_led(RED_LED_PIN);
Actor yellow_led(YELLOW_LED_PIN);
Actor green_led(GREEN_LED_PIN);
