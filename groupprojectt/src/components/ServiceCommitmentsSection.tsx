import { 
  ShieldCheck, 
  Plane, 
  Bed, 
  Utensils, 
  Bus, 
  Music, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Props { 
  lang: 'VI' | 'EN'; 
  onOpenBox: (data: { title: string; subtitle?: string; description: string; bullets?: string[]; badge?: string }) => void;
}

export default function ServiceCommitmentsSection({ lang, onOpenBox }: Props) {
  const isEn = lang === 'EN';
  const t = {
    sectionTitle: isEn ? 'III. Commitments' : 'III. Cam Kết',
    badge: isEn ? 'Gold Standard Service Commitment' : 'Cam Kết Vàng Chất Lượng Dịch Vụ',
    mainTitle: isEn ? 'Commitments & Journey Quality' : 'Cam Kết Dịch Vụ & Chất Lượng Hành Trình',
    desc: isEn 
      ? 'Elite Travel Group affirms its reputation with a top-tier 4-star quality commitment standard for Hue Ancient Capital heritage tours.'
      : 'Elite Travel Group khẳng định uy tín với bộ tiêu chuẩn cam kết chất lượng 4 sao hàng đầu cho tour du lịch di sản Cố Đô Huế.'
  };

  const commitmentsVI = [
    {
      icon: Plane,
      title: 'Hàng Không Vietnam Airlines (VNA)',
      desc: 'Bay thẳng khứ hồi cùng Hãng Hàng không Quốc gia Vietnam Airlines. Giờ bay vàng thuận tiện, chuẩn 12kg hành lý xách tay + 23kg hành lý ký gửi miễn cước.',
      bullets: ['Giờ bay vàng: Sáng đi 05:45 - Chiều về 13:20', 'Miễn cước 23kg hành lý ký gửi + 12kg xách tay', 'Dịch vụ khoang khách hiện đại, đúng giờ, an toàn']
    },
    {
      icon: Bed,
      title: 'Khách Sạn Century Riverside 4★ Ven Sông',
      desc: 'Nghỉ dưỡng tại Century Riverside Hotel (49 Lê Lợi) với vị thế hoàng gia hướng trọn tầm nhìn ra dòng sông Hương thơ mộng, hồ bơi ngoài trời sang trọng.',
      bullets: ['Vị trí trung tâm số 49 Lê Lợi ngay bờ sông Hương', 'Phòng tiêu chuẩn 4 sao đầy đủ tiện nghi hiện đại', 'Buffet sáng phong phú đa dạng món ngon xứ Huế']
    },
    {
      icon: Utensils,
      title: 'Ẩm Thực Cố Đô Chuẩn Vị & Vệ Sinh ATTP',
      desc: 'Thực đơn được tuyển chọn kỹ lưỡng tại các nhà hàng danh tiếng: Madam Thu 2, Không Gian Xưa, Cơm Niêu Chạn, Bánh Gánh Huế, Cơm Mỳ Bún Hến.',
      bullets: ['Ăn sáng đặc sản: Bún bò O Phượng, Bánh canh Bà Đợi, Cơm hến', 'Bữa chính tại nhà hàng Không Gian Xưa, Cơm Niêu Chạn, Madam Thu', 'Cam kết nguyên liệu tươi ngon, đảm bảo ATVSTP nghiêm ngặt']
    },
    {
      icon: Bus,
      title: 'Xe Du Lịch Đời Mới Máy Lạnh Suốt Tuyến',
      desc: 'Hệ thống xe du lịch máy lạnh đời mới phục vụ suốt hành trình từ sân bay Phú Bài đến các danh lam lăng tẩm hoàng gia và nội thành Huế.',
      bullets: ['Xe đời mới ghế bọc da êm ái, máy lạnh sâu dễ chịu', 'Bác tài địa phương lịch thiệp, giàu kinh nghiệm, đón đúng giờ', 'Phục vụ nước suối & khăn lạnh miễn phí hàng ngày']
    },
    {
      icon: Music,
      title: 'Bao Trọn Vé Tham Quan & Ca Huế Thuyền Rồng',
      desc: 'Đã bao gồm toàn bộ vé vào cổng Đại Nội (6 cụm di tích), Lăng Minh Mạng, Lăng Khải Định, vé thuyền rồng nghe ca Huế và thả hoa đăng.',
      bullets: ['Vé tham quan trọn gói toàn bộ điểm theo lịch trình', 'Thuyền rồng riêng nghe ca Huế & thả hoa đăng trên sông Hương', 'Không phụ thu, không phát sinh chi phí ẩn ngoài chương trình']
    },
    {
      icon: ShieldCheck,
      title: 'Bảo Hiểm Tối Đa & Hướng Dẫn Viên Tận Tâm',
      desc: 'Được phục vụ bởi hướng dẫn viên bản địa am hiểu sâu sắc văn hóa di sản triều Nguyễn, bảo hiểm du lịch mức trách nhiệm cao nhất 100.000.000 ₫.',
      bullets: ['Bảo hiểm du lịch trọn gói mức bồi thường 100.000.000 ₫/vụ', 'Hướng dẫn viên chuyên nghiệp, thuyết minh hấp dẫn, chu đáo', 'Đội ngũ Elite Travel Group chăm sóc hỗ trợ 24/7']
    }
  ];

  const commitmentsEN = [
    {
      icon: Plane,
      title: 'Vietnam Airlines (VNA) Air Travel',
      desc: 'Round-trip direct flight with Vietnam Airlines. Convenient golden flight times, including 12kg carry-on + 23kg checked baggage.',
      bullets: ['Golden flight times: Dep 05:45 - Ret 13:20', 'Includes 23kg checked + 12kg carry-on baggage', 'Modern cabin service, punctual and safe']
    },
    {
      icon: Bed,
      title: 'Century Riverside Hotel 4★ Riverside',
      desc: 'Stay at Century Riverside Hotel (49 Le Loi) with a royal position overlooking the poetic Perfume River, featuring a luxurious outdoor pool.',
      bullets: ['Central location at 49 Le Loi on the Perfume River', '4-star standard rooms with modern amenities', 'Rich and diverse Hue-style breakfast buffet']
    },
    {
      icon: Utensils,
      title: 'Authentic Hue Cuisine & Food Safety',
      desc: 'Menu carefully curated at renowned restaurants: Madam Thu 2, Khong Gian Xua, Com Nieu Chan, Banh Ganh Hue, Com My Bun Hen.',
      bullets: ['Specialty breakfast: Bun Bo O Phuong, Banh Canh Ba Doi, Com Hen', 'Main meals at Khong Gian Xua, Com Nieu Chan, Madam Thu', 'Commitment to fresh ingredients, strict food safety compliance']
    },
    {
      icon: Bus,
      title: 'Modern Air-Conditioned Tourist Vehicle',
      desc: 'A system of modern air-conditioned vehicles serves the entire journey from Phu Bai Airport to royal tombs and Hue city center.',
      bullets: ['Modern vehicles with comfortable leather seats', 'Polite, experienced local drivers, prompt pick-up', 'Complimentary bottled water & wet wipes daily']
    },
    {
      icon: Music,
      title: 'All-inclusive Sightseeing & Dragon Boat Hue Folk Songs',
      desc: 'Includes all entrance tickets to the Imperial Citadel (6 relic clusters), Minh Mang Tomb, Khai Dinh Tomb, dragon boat ticket for Hue folk songs and floating lanterns.',
      bullets: ['All-inclusive sightseeing tickets for the entire itinerary', 'Private dragon boat for Hue folk songs & lantern release', 'No extra charges, no hidden costs outside the program']
    },
    {
      icon: ShieldCheck,
      title: 'Maximum Insurance & Dedicated Tour Guides',
      desc: 'Served by local tour guides deeply knowledgeable about Nguyen Dynasty heritage culture, travel insurance with the highest liability level of 100,000,000 VND.',
      bullets: ['Comprehensive travel insurance (100,000,000 VND/case)', 'Professional, engaging, and attentive tour guides', 'Elite Travel Group team supports 24/7']
    }
  ];

  const commitments = isEn ? commitmentsEN : commitmentsVI;

  return (
    <section id="cam-ket" className="font-mono space-y-8 pt-8">
      <div className="space-y-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-left text-glow-white border-b border-amber-500/20 pb-4">
          {t.sectionTitle}
        </h2>
      </div>
      <ScrollReveal direction="up" delay={50}>
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase mb-1">
            <Award size={14} className="text-amber-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-glow-white">
            {t.mainTitle}
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {commitments.map((item, idx) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={idx} direction="up" delay={idx * 90} distance={32}>
              <div 
                onClick={() => onOpenBox({
                  title: item.title,
                  subtitle: isEn ? `Commitment Standards #${idx + 1}` : `Tiêu Chuẩn Cam Kết #${idx + 1}`,
                  description: item.desc,
                  bullets: item.bullets,
                  badge: isEn ? `Commitment #${idx + 1}` : `Cam Kết #${idx + 1}`
                })}
                className="h-full bg-stone-900/70 hover:bg-stone-900/95 border border-amber-500/20 hover:border-amber-400/80 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 group hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform shadow-md">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-[11px] text-stone-300">
                        <CheckCircle2 size={13} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
