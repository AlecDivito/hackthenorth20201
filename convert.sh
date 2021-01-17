#!/bin/bash
FILENAME=`basename $1`
NAME="${FILENAME%.*}"
OUTPUT="$2/$NAME.m3u8"
ffmpeg -i "$1" -c:a aac -b:a 64k -ac 2 -map 0:a -f hls -hls_list_size 0 -hls_time 5 "$OUTPUT"
