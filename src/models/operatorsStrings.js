import {
    AddCommand,
    DivideCommand,
    MultiplyCommand,
    PowerRootCommand,
    SubstractCommand,
    AnyPowerCommand,
} from '../commands'

const operatorsStrings = new Map()
operatorsStrings.set(AddCommand, '+')
operatorsStrings.set(DivideCommand, '/')
operatorsStrings.set(MultiplyCommand, '*')
operatorsStrings.set(SubstractCommand, '-')
operatorsStrings.set(PowerRootCommand, 'x\u{0221A}y')
operatorsStrings.set(AnyPowerCommand, 'x^y')

export default operatorsStrings
