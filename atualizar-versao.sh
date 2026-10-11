#!/usr/bin/env bash
# Atualiza o número de versão (?v=...) dos arquivos no index.html.
#
# Por que isso existe: o GitHub Pages manda o navegador guardar os arquivos por
# alguns minutos. Mudando o número, o navegador entende que é um arquivo novo
# e baixa a versão atualizada na hora.
#
# Uso (rode na pasta do projeto, antes de fazer o commit):
#   ./atualizar-versao.sh

set -euo pipefail
cd "$(dirname "$0")"

VERSAO="$(date +%Y%m%d%H%M)"

if [ ! -f index.html ]; then
    echo "Erro: index.html não encontrado." >&2
    exit 1
fi

# Troca ?v=QUALQUER_COISA por ?v=NOVA_VERSAO nos três arquivos
sed -i -E "s#(style\.css|livros\.js|script\.js)\?v=[A-Za-z0-9]+#\1?v=${VERSAO}#g" index.html

echo "Versão atualizada para ${VERSAO}:"
grep -n -E '(style\.css|livros\.js|script\.js)\?v=' index.html
