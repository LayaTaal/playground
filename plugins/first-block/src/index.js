/* eslint-disable import/no-unresolved */
import { Fragment } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody } from '@wordpress/components';

import json from '../block.json';

const { name, settings } = json;

registerBlockType( name, {
	edit: ( props ) => {
		const { attributes, setAttributes } = props;
		const { numberOfPosts } = attributes;
		const blockProps = useBlockProps();

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<TextControl
							label="Number of Posts"
							value={ numberOfPosts }
							onChange={ ( newValue ) =>
								setAttributes( { numberOfPosts: newValue } )
							}
						/>
					</PanelBody>
				</InspectorControls>
				<div { ...blockProps }>Hello World</div>
			</Fragment>
		);
	},
	save: ( props ) => {
		const blockProps = useBlockProps.save();
		return <div { ...blockProps }>Hello World</div>;
	},
	...settings,
} );
