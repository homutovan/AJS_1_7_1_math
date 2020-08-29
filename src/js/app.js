import Character from './character';

function typeFabric(type, parent) {
  return class extends parent {
    constructor(name) {
      super(name);
      this.type = type;
    }
  };
}

export default function characterFabric(name, type, parent) {
  const SpecCharachter = typeFabric(type, parent);
  return new SpecCharachter(name);
}
