export type Attribute = {
    value: number;
    modifier: number;
}

export type Attributes = {
    Strength: Attribute;
    Dexterity: Attribute;
    Constitution: Attribute;
    Intelligence: Attribute;
    Wisdom: Attribute;
    Charisma: Attribute;
};

export type Class = "Barbarian" | "Wizard" | "Bard";
