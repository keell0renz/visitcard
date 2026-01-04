import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get('title') || 'Bohdan Agarkov';
  let description =
    url.searchParams.get('description') ||
    'Software Engineer, focused on generative AI and full-stack development. I am interested in SWE, AI, economics and sentience.';

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center"
        style={{
          background: '#050505',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div tw="flex flex-col w-full h-full px-20 py-20 justify-center">
          <div tw="flex items-baseline mb-10">
            <h1
              tw="text-7xl font-medium tracking-tight mr-3"
              style={{ color: '#ffffff' }}
            >
              {title}{' '}
            </h1>
            <span
              tw="text-6xl font-normal"
              style={{
                background: 'linear-gradient(to right, #c084fc, #ec4899)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              @keell0renz
            </span>
          </div>
          <p
            tw="text-3xl leading-relaxed font-light max-w-4xl"
            style={{ color: '#d4d4d4' }}
          >
            {description}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
