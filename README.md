Private Universal Collaboration Kit 
===============================================================================

This project was born out of a desire to share large files with family
members and trusted individuals.

## Functionality

* Router
	* DNS server
	* DHCP server
* File sharing
	* SMB
	* AFP
* Media server
	* Support to stream to any DLNA compatible device
	* Needs to work with:
		* My Android phone (via [MediaHouse](https://play.google.com/store/apps/details?id=com.dbapp.android.mediahouse&hl=en))
		* The iPhone models that my heretical family use
		* XBox 360 and XBox one
* Time Machine
	* Support Time Machine to allow backing up of a single laptop
	* Supporting more than one device is on the back burner, unless someone wants
	  to buy me a couple of Macs. Then I'll make it a top priority.

## Notes

* The [Izanagi](https://github.com/timmd909/izanagi) repo houses all the
  Ansible related scripts for all my projects.
* This project was designed to be run alone on a
  [Raspberry Pi](https://www.raspberrypi.org/) running
  [Raspian](https://www.raspbian.org/) &ldquo;essie&rdquo;. It'd probably
  work well enough on Ubuntu or any other Debian-based distro with
  few changes.
