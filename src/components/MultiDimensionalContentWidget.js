import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const MultiDimensionalContentWidget = () => {

	let getAllTabElements = function () {
		var tabElements = document.querySelectorAll('.install-tabs .tabs__item');
		return tabElements;
	}

	let getByText = function (text) {
		var allElements = getAllTabElements();
		var selectedElement;
		// docusaurus seems to be stripping away some array extensions like find()...
		allElements.forEach(el => {
			if (el.innerHTML == text) {
				selectedElement = el;
			}
		})
		return selectedElement;
	}

	let clearEventListener = function(element) {
		const clonedElement = element.cloneNode(true);
	   element.replaceWith(clonedElement);
	   return clonedElement;
	   }

	let disableByText = function (text) {
		var targetElement = getByText(text);
		targetElement.classList.add('disabled-tab');
		clearEventListener(targetElement);
	}

	let enableByText = function (text) {
		var targetElement = getByText(text);
		targetElement.classList.remove('disabled-tab');
	}

	let selectByText = function (text) {
		console.log("selecting " + text + '...');
		var targetElement = getByText(text);
		targetElement.click();
	}

	let isSelectedByText = function (text) {
		var targetElement = getByText(text);
		var isSelected = targetElement.classList.contains('tabs__item--active');
		return isSelected;
	}

	let toggleUpdated = function (element) {
		var parent = element.parentElement;
		parent.classList.remove('updated');
		parent.classList.add('updated');
		setTimeout(function () {
			parent.classList.remove('updated');
		}, 2000)
	}

	let stashConfig = function () {
		var selectedOS, selectedNetwork, selectedEL, selectedCL, selectedENBN;

		if (isSelectedByText('Windows'))
			selectedOS = "Windows";
		else
			selectedOS = "Linux, MacOS, Arm64";

		if (isSelectedByText('Gnosis'))
			selectedNetwork = "Gnosis";
		else if (isSelectedByText('Chiado'))
			selectedNetwork = "Chiado";

		if (isSelectedByText('Nethermind'))
			selectedEL = "Nethermind";
		else if (isSelectedByText('Besu'))
			selectedEL = "Besu";
		else if (isSelectedByText('Erigon'))
			selectedEL = "Erigon";
		else if (isSelectedByText('Geth'))
			selectedEL = "Geth";

		if (isSelectedByText('Lighthouse'))
			selectedCL = "Lighthouse";
		else if (isSelectedByText('Lodestar'))
			selectedCL = "Lodestar";
		else if (isSelectedByText('Nimbus'))
			selectedCL = "Nimbus";
		else if (isSelectedByText('Prysm'))
			selectedCL = "Prysm";
		else if (isSelectedByText('Teku'))
			selectedCL = "Teku";

		var tabWidget = document.querySelector('.install-tabs');
		tabWidget.dataset.selectedOS = selectedOS;
		tabWidget.dataset.selectedNetwork = selectedNetwork;
		tabWidget.dataset.selectedEL = selectedEL;
		tabWidget.dataset.selectedCL = selectedCL;
		tabWidget.dataset.selectedENBN = selectedENBN;
	}

	let bindTabs = function () {
		setTimeout(function () {

			var tabElements = getAllTabElements();
			tabElements.forEach(element => {
				var isLabel = element.textContent.indexOf(":") > -1;

				if (isLabel) {
					// unbind so tab can't be selected
					element.outerHTML = element.outerHTML;
				} else {
					element.addEventListener("click", function (event) {
						var targetElement = event.target;
						var textContent = targetElement.textContent;
						console.log(textContent)
						toggleUpdated(targetElement);
						stashConfig();
					}, false)
				}
			});

			//Disable unsupported clients
			disableByText("Besu")
			disableByText("Erigon")
			disableByText("Geth")
			disableByText("Nimbus")
			disableByText("Prysm")

			//Select defaults
			selectByText("Nethermind")
			selectByText("Lighthouse")
			
			stashConfig();
		}, 100)
	}

	return (
		<BrowserOnly>
			{() => { bindTabs() }}
		</BrowserOnly>
	);
};