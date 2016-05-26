#Hide Cooki Policy

This is a simple stupid Firefox extension that tries to close cookie policy
banners.

It looks for specific elements by id from a list of known ones, so some work
may be needed in order to keep the list up to date.

Future improvements
===================
* update the list of ids at runtime by the user
* share the list of ids between users
* auto update the list when new entries are available

Build the extension
===================

Building the extension is quite easy, the only requirement is to have npm
installed in the sistem; the procedure is:
* install jpm with npm install -g jpm
* cd in to the extension's directory
* jpm xpi

After these simple steps a new unsigned xpi file will be generated in the
extension's directory
