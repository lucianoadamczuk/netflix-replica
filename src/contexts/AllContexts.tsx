import React, { type ReactNode } from 'react'
import { ProviderMoviesRequest } from './ContextMoviesRequest'
import { ProviderSeriesRequest } from './ContextSeriesRequest'
import { ProviderMovieTrailerModal } from './ContextMovieTrailerModal'
import { ProviderSerieTrailerModal } from './ContextSerieTrailerModal'
import { SearchProvider } from './ContextSearch'

interface AllContextProps {
  children: ReactNode
}

export const AllContexts: React.FC<AllContextProps> = ({ children }) => {
  return (
    <>
      <ProviderMoviesRequest>
        <ProviderSeriesRequest>
          <SearchProvider>
            <ProviderMovieTrailerModal>
              <ProviderSerieTrailerModal>
                {children}
              </ProviderSerieTrailerModal>
            </ProviderMovieTrailerModal>
          </SearchProvider>
        </ProviderSeriesRequest>
      </ProviderMoviesRequest>
    </>
  )
}
