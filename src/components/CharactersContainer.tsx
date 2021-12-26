import styled from '@emotion/styled';
import { Error, Loading, CharacterCard } from '.';
import { MEDIA_QUERY_END_POINT } from '../contants';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Characters } from '../types/Characters';

interface CharactersProps {
	name: string;
}

export const CharactersContainer = ({ name }: CharactersProps) => {
	const { data, error } = useFuturamaData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<CharacterContainer>
				{data.map((useFuturamaData: Characters) => {
					return (
						<CharacterCard
							key={`character-list-${useFuturamaData.id}`}
							characterData={useFuturamaData}
						/>
					);
				})}
			</CharacterContainer>
		</div>
	);
};

const CharacterContainer = styled.section``;