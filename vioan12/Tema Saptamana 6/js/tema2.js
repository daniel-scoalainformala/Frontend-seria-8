// We need a program which calculates the Maximum Weight which a bed supports
/*
// Bed Sizes
var bedSizeSmall = 20;
var bedSizeMedium = 30;
var bedSizeLarge = 40;

var bedSizeArray = [20, 30, 40]

// Bed Structures
var bedStructureWeak = 100;
var bedStructureMedium = 125;
var bedStructureStrong = 150;

// Bed Material Types
var bedMaterialWood = 35.5;
var bedMaterialSteel = 70;
var bedMaterialConcrete = 100;

// Current bed data
bedSizeArray.forEach(currentBedSize => {
	// All variables are defined. We need to calculate the Max Allowed Weight for All Bed Material Types
	//maxAllowedWeightWood
	console.log(stringStrength(currentBedSize, bedStructureWeak, 
		maxAllowedWeight(currentBedSize, bedStructureWeak, bedMaterialWood)));
	//maxAllowedWeightSteel
	console.log(stringStrength(currentBedSize, bedStructureMedium, 
		maxAllowedWeight(currentBedSize, bedStructureMedium, bedMaterialSteel)));
	//maxAllowedWeightConcrete
	console.log(stringStrength(currentBedSize, bedStructureStrong, 
		maxAllowedWeight(currentBedSize, bedStructureStrong, bedMaterialConcrete)));
});

function maxAllowedWeight(bedSize, bedStructure, bedMaterial){
	return bedSize * (bedStructure / 2) * Math.pow(bedMaterial, 2);
}

function stringStrength(bedSize, bedStructure, maxAllowedWeight){
	return "Bed size: " + bedSize + " -> Structure: " + bedStructure + " -> Allowed weight: " + maxAllowedWeight;
}
*/

var structure = {
	weak : 100,
	medium : 125,
	strong : 150
}

var material = {
	wood : 35.5, 
	steel : 70,
	concrete : 100
}

var size = {
	small : 20,
	medium : 30,
	large : 40
}

class Bed
{
	constructor(size, structure, material){
		this.size = size;
		this.structure = structure;
		this.material = material;
	}

	computeMaxAllowedWeight(){
		return this.size * (this.structure / 2) 
			* Math.pow(this.material, 2);
	}

	stringStrength(){
		return "Bed size: " + this.size 
		+ " -> Structure: " + this.structure
		+ " -> Allowed weight: " + this.computeMaxAllowedWeight()
		+ "\n";
	}
};

/*
sizeParameterIndex = 0;
	while(sizeParameterIndex < Object.keys(size).length){
		structureParameterIndex = 0;
		materialParameterIndex = 0;
		while(structureParameterIndex < Object.keys(structure).length
			&& materialParameterIndex < Object.keys(material).length){
				consolePrint(new Bed(size[Object.keys(size)[sizeParameterIndex]], 
					structure[Object.keys(structure)[structureParameterIndex]],
					material[Object.keys(material)[materialParameterIndex]]).stringStrength());
				structureParameterIndex++;
				materialParameterIndex++;
			}
		sizeParameterIndex++;
	}
*/

for(sizeProperty in size){
	for(structureProperty in structure){
		for(materialProperty in material){
			consolePrint(new Bed(size[sizeProperty], structure[structureProperty], material[materialProperty]).stringStrength());
		}
	}
}

function consolePrint(string){
	console.log(string);
}

/*
Bed size: 20 -> Structure: 100 -> Allowed weight: 1260250
Bed size: 20 -> Structure: 125. Allowed weight: 6125000
Bed size: 20 -> Structure: 150. Allowed weight: 15000000

Bed size: 30 -> Structure: 100 -> Allowed weight: 1890375
Bed size: 30 -> Structure: 125. Allowed weight: 9187500
Bed size: 30 -> Structure: 150. Allowed weight: 22500000

Bed size: 40 -> Structure: 100 -> Allowed weight: 2520500
Bed size: 40 -> Structure: 125. Allowed weight: 12250000
Bed size: 40 -> Structure: 150. Allowed weight: 30000000

*/