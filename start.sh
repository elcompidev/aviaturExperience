#!/bin/bash

#echo "🔄 Actualizando dependencias PHP..."
#composer update || exit 1

echo "📦 Instalando dependencias de Node..."
npm install 

echo "🚀 Iniciando frontend..."
npm start &

echo "🐳 Iniciando DDEV..."
ddev start

read -p "Presiona [Enter] para cerrar esta ventana...