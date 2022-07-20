import {NextRequest, NextResponse} from 'next/server';

export default (req: NextRequest) => {
    // console.log('Edit and run at the edge!')
    // const geo = req.geo()
    // const country = geo.country || 'none-country'
    // const city = geo.city || 'none-city'
    // const region = geo.city || 'none-region'

    // return NextResponse(` ip: ${req.ip}, geo.country: ${country}, geo.city: ${city}, geo.region: ${region}`)
    return NextResponse.json({
        name: `Hello, from ${req.url} I'm now an Edge Function! 使用Github部署`,
        req: JSON.stringify(req),
    });
};

export const config = {
    runtime: 'experimental-edge',
};
