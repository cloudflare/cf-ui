#!/bin/sh
set -e

echo "Symlinking www-style/htdocs/static to ./example/www-style"
ln -F -s ../../www-style/htdocs/static ./example/www-style

echo "Success."
