function getStyle(obj,Style){
	return obj.currentStlye?obj.currentStlye[Style]:getComputedStyle(obj,false)[Style];
}