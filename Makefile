.PHONY: c crc crc-yolo 

# Claude Code

c:
	claude

# start remote control with Claude
crc:
	claude --remote-control

# start remote control with Claude with full edit permissions
crc-yolo:
	claude --remote-control --dangerously-skip-permissions --effort high



