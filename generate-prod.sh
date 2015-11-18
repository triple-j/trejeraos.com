#!/bin/bash

bower update
~/bin/sculpin generate --env=prod
rsync -av output_prod/ /var/www/trejeraos.com/public_html/


