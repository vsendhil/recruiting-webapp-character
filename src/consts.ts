import type { Attributes, Class } from "./types";

export const ATTRIBUTE_LIST = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
];

export const CLASS_LIST = [
    'Barbarian',
    'Wizard',
    'Bard'
];

export const CLASS_REQS: Record<Class, Attributes> = {
    'Barbarian': {
        'Strength': { value: 14, modifier: 2 },
        'Dexterity': { value: 9, modifier: -1 },
        'Constitution': { value: 9, modifier: -1 },
        'Intelligence': { value: 9, modifier: -1 },
        'Wisdom': { value: 9, modifier: -1 },
        'Charisma': { value: 9, modifier: -1 },
    },
    'Wizard': {
        'Strength': { value: 9, modifier: -1 },
        'Dexterity': { value: 9, modifier: -1 },
        'Constitution': { value: 9, modifier: -1 },
        'Intelligence': { value: 14, modifier: 2 },
        'Wisdom': { value: 9, modifier: -1 },
        'Charisma': { value: 9, modifier: -1 },
    },
    'Bard': {
        'Strength': { value: 9, modifier: -1 },
        'Dexterity': { value: 9, modifier: -1 },
        'Constitution': { value: 9, modifier: -1 },
        'Intelligence': { value: 9, modifier: -1 },
        'Wisdom': { value: 9, modifier: -1 },
        'Charisma': { value: 14, modifier: 2 },
    },
}

export const SKILL_LIST = [
    { name: 'Acrobatics', attributeModifier: 'Dexterity' },
    { name: 'Animal Handling', attributeModifier: 'Wisdom' },
    { name: 'Arcana', attributeModifier: 'Intelligence' },
    { name: 'Athletics', attributeModifier: 'Strength' },
    { name: 'Deception', attributeModifier: 'Charisma' },
    { name: 'History', attributeModifier: 'Intelligence' },
    { name: 'Insight', attributeModifier: 'Wisdom' },
    { name: 'Intimidation', attributeModifier: 'Charisma' },
    { name: 'Investigation', attributeModifier: 'Intelligence' },
    { name: 'Medicine', attributeModifier: 'Wisdom' },
    { name: 'Nature', attributeModifier: 'Intelligence' },
    { name: 'Perception', attributeModifier: 'Wisdom' },
    { name: 'Performance', attributeModifier: 'Charisma' },
    { name: 'Persuasion', attributeModifier: 'Charisma' },
    { name: 'Religion', attributeModifier: 'Intelligence' },
    { name: 'Sleight of Hand', attributeModifier: 'Dexterity' },
    { name: 'Stealth', attributeModifier: 'Dexterity' },
    { name: 'Survival', attributeModifier: 'Wisdom' },

]