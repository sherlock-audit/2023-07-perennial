
# Perennial V2 contest details

- Join [Sherlock Discord](https://discord.gg/MABEWyASkp)
- Submit findings using the issue page in your private contest repo (label issues as med or high)
- [Read for more details](https://docs.sherlock.xyz/audits/watsons)

# Q&A

### Q: On what chains are the smart contracts going to be deployed?
One or all of the following: Ethereum L2, Arbitrum, Optimism, Base

Other L2 EVM chains are eligible
___

### Q: Which ERC20 tokens do you expect will interact with the smart contracts? 
DSU and USDC (USDC.e on Arbitrum)
___

### Q: Which ERC721 tokens do you expect will interact with the smart contracts? 
None
___

### Q: Which ERC777 tokens do you expect will interact with the smart contracts? 
None
___

### Q: Are there any FEE-ON-TRANSFER tokens interacting with the smart contracts?

No
___

### Q: Are there any REBASING tokens interacting with the smart contracts?

No
___

### Q: Are the admins of the protocols your contracts integrate with (if any) TRUSTED or RESTRICTED?
TRUSTED
___

### Q: Is the admin/owner of the protocol/contracts TRUSTED or RESTRICTED?
Protocol admin: TRUSTED


___

### Q: Are there any additional protocol roles? If yes, please explain in detail:
Markets have Owners and Coordinators which can update parameters for that specific market - these coordinators have a large amount of flexibility within their own market but should not be able to adversely affect other markets or the overall protocol.
___

### Q: Is the code/contract expected to comply with any EIPs? Are there specific assumptions around adhering to those EIPs that Watsons should be aware of?
No
___

### Q: Please list any known issues/acceptable risks that should not result in a valid finding.
As stated above - market owners+coordinators can do many things within their markets which could adversely affect user funds within those markets. However, they should not be able to affect other markets

Flywheel being down due to external downtime - sequencer and oracle downtime does not have special case handling. Perennial also does not provide grace periods for users to cure their positions when these systems do come back up

0-value payoff functions are not supported.
___

### Q: Please provide links to previous audits (if any).
None
___

### Q: Are there any off-chain mechanisms or off-chain procedures for the protocol (keeper bots, input validation expectations, etc)?
Yes - there are keepers for oracle updates, liquidations, and order types
___

### Q: In case of external protocol integrations, are the risks of external contracts pausing or executing an emergency withdrawal acceptable? If not, Watsons will submit issues related to these situations that can harm your protocol's functionality.
We want to be aware of issues that might arise from oracle or DSU integrations


___

### Q: Do you expect to use any of the following tokens with non-standard behaviour with the smart contracts?
USDC
___

### Q: Add links to relevant protocol resources
V1 Overview docs: https://docs.perennial.finance/

V2 Mechanism 1-pager: https://docs.google.com/document/d/1f-V_byFYkJdJAHMXxN2NiiDqysYhoqKzZXteee8BuIQ/edit
___



# Audit scope

