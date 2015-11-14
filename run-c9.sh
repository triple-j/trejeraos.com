#!/bin/bash

pkill apache2
sculpin generate --watch --server --port $PORT
