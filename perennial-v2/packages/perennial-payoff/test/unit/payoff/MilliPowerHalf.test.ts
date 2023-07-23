import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import HRE from 'hardhat'

import { MilliPowerHalf, MilliPowerHalf__factory } from '../../../types/generated'
import { parse6decimal } from '../../../../common/testutil/types'

const { ethers } = HRE

describe('MilliPowerHalf', () => {
  let user: SignerWithAddress
  let provider: MilliPowerHalf

  beforeEach(async () => {
    ;[user] = await ethers.getSigners()
    provider = await new MilliPowerHalf__factory(user).deploy()
  })

  describe('#payoff', async () => {
    it('modifies price per payoff (1)', async () => {
      expect(await provider.payoff(parse6decimal('1'))).to.equal(parse6decimal('0.001'))
    })

    it('modifies price per payoff (2)', async () => {
      expect(await provider.payoff(parse6decimal('11'))).to.equal(parse6decimal('0.003316'))
    })

    it('modifies price per payoff (3)', async () => {
      expect(await provider.payoff(parse6decimal('0.1'))).to.equal(parse6decimal('0.000316'))
    })

    it('modifies price per payoff (4)', async () => {
      expect(await provider.payoff(parse6decimal('-1'))).to.equal(parse6decimal('0.001'))
    })

    it('modifies price per payoff (5)', async () => {
      expect(await provider.payoff(parse6decimal('-11'))).to.equal(parse6decimal('0.0033166'))
    })

    it('modifies price per payoff (6)', async () => {
      expect(await provider.payoff(parse6decimal('-0.1'))).to.equal(parse6decimal('0.000316'))
    })

    it('modifies price per payoff (7)', async () => {
      expect(await provider.payoff(parse6decimal('0'))).to.equal(0)
    })
  })
})
