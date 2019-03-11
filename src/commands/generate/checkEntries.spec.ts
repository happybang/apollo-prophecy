import { expect } from 'chai';
import checkEntries from "./checkEntries";
import { entries } from '../../_specs-utils';

const mockReadFromFile = () => JSON.parse(`{
  "UnknownError": {
    "message": "An unknown error has occurred!  Please try again later",
    "code": "UNKNOWN"
  },
  "NoCodeError": {
    "message": "You are not allowed to do this"
  }
}`);

describe('checkEntries', () => {
  it('Should positevely check the entries and return them', () => {
    expect(checkEntries(entries)).to.be.eq(entries);
  });

  it('Should throw No "code" key found', () => {
    const checkEntriesMock = () => checkEntries(mockReadFromFile())
    expect(checkEntriesMock).to.throw('[CodeKeyImperative] No "code" key found for: [NoCodeError]');
  });
});